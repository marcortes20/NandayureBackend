import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
//import { CreateRequestApprovalDto } from './dto/create-request-approval.dto';
import { UpdateRequestApprovalDto } from './dto/update-request-approval.dto';
import { RequestApprovalRepository } from './repository/request-approvals.repository';
import { EmployeesService } from 'src/employees/employees.service';
import { MailClientService } from 'src/mail-client/mail-client.service';
import { RequestRepository } from 'src/requests/repository/request.repository';
import { IsNull } from 'typeorm';

@Injectable()
export class RequestApprovalsService {
  constructor(
    private readonly requestApprovalRepository: RequestApprovalRepository,
    private readonly requestRepository: RequestRepository,
    private readonly employeeRepository: EmployeesService,
    private readonly mailClient: MailClientService,
  ) {}

  // async create(createRequestApprovalDto: CreateRequestApprovalDto) {
  //   const newRequestApproval = this.requestApprovalRepository.create(
  //     createRequestApprovalDto,
  //   );

  //   return createRequestApprovalDto;
  // }

  async findAll() {
    return await this.requestApprovalRepository.findAll();
  }

  async findOneByRequestId(id: number) {
    return await this.requestApprovalRepository.findOne({
      where: { RequestId: id },
    });
  }

  async update(id: number, updateRequestApprovalDto: UpdateRequestApprovalDto) {
    try {
      //validar que la persona que esta aprobando sea la correcta

      const existRequestApproval =
        await this.requestApprovalRepository.findOneById(id);

      if (!existRequestApproval) {
        throw new NotFoundException('Registro no encontrado');
      }

      if (existRequestApproval.current === false) {
        throw new BadRequestException('No es el proceso actual');
      }

      const updated = await this.requestApprovalRepository.save({
        ...existRequestApproval,
        ...updateRequestApprovalDto,
        ApprovedDate: new Date(),
        current: false,
      });

      const request = await this.requestRepository.findOneById(
        updated.RequestId,
      );

      if (updated.approved === false) {
        request.RequestStateId = 3; // Rechazado
        await this.requestRepository.save(request);

        return updated;
      }
      const nextStep = await this.requestApprovalRepository.findOne({
        where: {
          RequestId: existRequestApproval.RequestId,
          approved: IsNull(),
        },
        order: { processNumber: 'ASC' },
      });

      if (nextStep) {
        nextStep.current = true;
        await this.requestApprovalRepository.save(nextStep);
      } else {
        request.RequestStateId = 2; // Aprobado
        await this.requestRepository.save(request);
      }
      return updated;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: number) {
    const existRequestApproval =
      await this.requestApprovalRepository.findOneById(id);

    if (!existRequestApproval) {
      throw new NotFoundException('Registro no encontrado');
    }

    return await this.requestApprovalRepository.remove(existRequestApproval);
  }
}

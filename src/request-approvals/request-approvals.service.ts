import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestApprovalDto } from './dto/create-request-approval.dto';
import { UpdateRequestApprovalDto } from './dto/update-request-approval.dto';
import { RequestsService } from 'src/requests/requests.service';
import { RequestApprovalRepository } from './repository/request-approvals.repository';
import { EmployeesService } from 'src/employees/employees.service';
import { MailClientService } from 'src/mail-client/mail-client.service';

@Injectable()
export class RequestApprovalsService {
  constructor(
    private readonly requestApprovalRepository: RequestApprovalRepository,
    private readonly requestRepository: RequestsService,
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
    const existRequestApproval =
      await this.requestApprovalRepository.findOneById(id);

    if (!existRequestApproval) {
      throw new NotFoundException('Registro no encontrado');
    }

    return await this.requestApprovalRepository.save({
      ...existRequestApproval,
      ...updateRequestApprovalDto,
    });
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

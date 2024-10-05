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
import { DataSource, IsNull, QueryRunner } from 'typeorm';
import { RequestApproval } from './entities/request-approval.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class RequestApprovalsService {
  constructor(
    private readonly requestApprovalRepository: RequestApprovalRepository,
    private readonly requestRepository: RequestRepository,
    private readonly employeeRepository: EmployeesService,
    private readonly mailClient: MailClientService,
    private readonly dataSource: DataSource,
  ) {}

  async findAll() {
    return await this.requestApprovalRepository.findAll();
  }
  async findMyRequestToApprove(approverId: string) {
    return await this.requestApprovalRepository.findAll({
      where: { approverId, approved: IsNull(), current: true },
    });
  }

  async findOneByRequestId(id: number) {
    return await this.requestApprovalRepository.findOne({
      where: { RequestId: id },
    });
  }

  async validateRequestApproval(id: number) {
    const requestApproval =
      await this.requestApprovalRepository.findOneById(id);

    if (!requestApproval) {
      throw new NotFoundException('Registro no encontrado');
    }

    if (requestApproval.current === false) {
      throw new BadRequestException('No es el proceso actual');
    }
    return requestApproval;
  }

  async validateNextStep(
    updated: RequestApproval,
    RequestId: number,
    approver: Employee,
    requester: Employee,
    queryRunner: QueryRunner,
  ) {
    const request = await this.requestRepository.findOne({
      where: { id: RequestId },
      relations: {
        RequestType: true,
      },
    });

    if (updated.approved === false) {
      request.RequestStateId = 3; // Rechazado
      await queryRunner.manager.save(request);

      this.mailClient.sendRequestResolution(
        requester.Email,
        requester.Name,
        request.RequestType.name,
        false,
      );
    }
    const nextStep = await queryRunner.manager.findOne(RequestApproval, {
      where: {
        RequestId: RequestId,
        approved: IsNull(),
      },
      order: { processNumber: 'ASC' },
    });
    console.log(nextStep);

    if (nextStep) {
      nextStep.current = true;
      await queryRunner.manager.save(nextStep);
      this.mailClient.sendNewRequestProcessApproverMail(
        approver.Email,
        requester.id,
        requester.Name,
        request.RequestType.name,
      );
      //return;
    } else {
      request.RequestStateId = 2; // Aprobado
      await queryRunner.manager.save(request);
      this.mailClient.sendRequestResolution(
        requester.Email,
        requester.Name,
        request.RequestType.name,
        true,
      );
    }
  }

  async update(
    id: number,
    updateRequestApprovalDto: UpdateRequestApprovalDto,
    approverId: string,
  ) {
    // 1. Create a new transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      //agregar transaccion

      const existRequestApproval = await this.validateRequestApproval(id);
      if (existRequestApproval.approverId !== approverId) {
        throw new BadRequestException(
          'No tiene permisos para aprobar esta solicitud',
        );
      }

      const requestApprovalToEdit = this.requestApprovalRepository.create({
        ...existRequestApproval,
        ...updateRequestApprovalDto,
        approved: true,
        ApprovedDate: new Date(),
        current: false,
      });

      const updated = await queryRunner.manager.save(requestApprovalToEdit);
      console.log(updated);

      const approver = await this.employeeRepository.findOneById(
        updated.approverId,
      );

      const requester = await this.employeeRepository.findOneById(
        updated.requesterId,
      );

      await this.validateNextStep(
        updated,
        existRequestApproval.RequestId,
        approver,
        requester,
        queryRunner,
      );

      await queryRunner.commitTransaction();
      return updated;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(e);
    } finally {
      await queryRunner.release(); // release the queryRunner
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

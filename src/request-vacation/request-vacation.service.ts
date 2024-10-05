import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRequestVacationDto } from './dto/create-request-vacation.dto';
import { UpdateRequestVacationDto } from './dto/update-request-vacation.dto';
import { RequestVacationRepository } from './repository/Request-Vacation.repository';
import { EmployeesService } from 'src/employees/employees.service';
import { DataSource, QueryRunner } from 'typeorm';
import { CreateRequestApprovalDto } from 'src/request-approvals/dto/create-request-approval.dto';
import { DepartmentsService } from 'src/departments/departments.service';
import { RequestApprovalRepository } from 'src/request-approvals/repository/request-approvals.repository';
import { RequestRepository } from 'src/requests/repository/request.repository';
import { MailClientService } from 'src/mail-client/mail-client.service';
import { Department } from 'src/departments/entities/department.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class RequestVacationService {
  constructor(
    private readonly requestVacationRepository: RequestVacationRepository,
    private readonly requestRepository: RequestRepository,
    private readonly employeeRepository: EmployeesService,
    private readonly requestApprovalRepository: RequestApprovalRepository,
    private readonly dataSource: DataSource,
    private readonly departmentRepository: DepartmentsService,
    private readonly mailClient: MailClientService,
  ) {}

  async create(
    createRequestVacationDto: CreateRequestVacationDto,
    EmployeeId: string,
  ) {
    // 1. Create a new transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // 2. Get the entities needed for the approval process
      const { RRHHdepartment, mayor, RequesterDepartment } =
        await this.getApprovalEntities(EmployeeId);

      // 3. Validate if the employee exists and if have enough days to request
      await this.employeeRepository.validateAvaiableVacationsDays(
        EmployeeId,
        createRequestVacationDto.daysRequested,
      );

      // 4. Create the request who will be related to the vacation request and approvals

      //requestTypeId 1 is for vacation requests
      const request = await this.createRequest(EmployeeId, 1, queryRunner);

      // 5. Create the approvals for the request
      const approvals = await this.createApprovals(
        EmployeeId,
        RequesterDepartment.departmentHeadId,
        RRHHdepartment.departmentHeadId,
        mayor.id,
        request.id,
      );

      // 6. Auto approve the request if the employee is the department head/ doesn't hace department head or the mayor
      await this.autoApproveRequest(
        approvals,
        RequesterDepartment,
        RRHHdepartment,
        mayor,
        EmployeeId,
      );

      // 7. Create the vacation request
      const newVacationRequest = this.requestVacationRepository.create({
        ...createRequestVacationDto,
        RequestId: request.id, //Assign the request id to the vacation request
      });

      // 8. Create the approval process
      const ApprovalProcess =
        this.requestApprovalRepository.createMany(approvals);

      // 9. Save the approval procces entities
      await queryRunner.manager.save(ApprovalProcess);

      // 10. Save the vacation request
      const savedRequest = await queryRunner.manager.save(newVacationRequest);

      // 11. Send the confirmation mails to the approvers and the requester
      await this.sendRequestConfirmationMails(approvals);

      // 12. Commit the transaction
      await queryRunner.commitTransaction();

      return savedRequest;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Error al crear la solicitud: ');
    } finally {
      await queryRunner.release(); // release the queryRunner
    }
  }

  async sendRequestConfirmationMails(approvals: CreateRequestApprovalDto[]) {
    // Send mail to the first step of the approval process
    for (let i = 0; i < approvals.length; i++) {
      if (approvals[i].approved === undefined) {
        const approver = await this.employeeRepository.findOneById(
          approvals[i].approverId,
        );

        const requester = await this.employeeRepository.findOneById(
          approvals[i].requesterId,
        );

        //mail to notify the approver
        await this.mailClient.sendNewRequestProcessApproverMail(
          approver.Email,
          requester.id,
          requester.Name,
          'Vacaciones',
        );

        //mail to notify the requester
        await this.mailClient.sendNewRequestProcessRequesterMail(
          approver.Name,
          requester.Email,
          requester.Name,
          'Vacaciones',
        );
        return;
      }
    }
  }

  async getApprovalEntities(EmployeeId: string) {
    //validate if the employee is the department head OF the RRHH department head OF the mayor OR the head of his department
    const RRHHdepartment =
      await this.departmentRepository.findOneByName('RECURSOS HUMANOS');

    const mayor = await this.employeeRepository.findMayor();

    const RequesterDepartment =
      await this.employeeRepository.getEmployeeDepartment(EmployeeId);

    if (RRHHdepartment.departmentHeadId === null) {
      throw new NotFoundException(
        'Para realizar una solicitud de vacaciones es necesario que exista un jefe de departamento de RRHH',
      );
    }

    if (!RequesterDepartment || !RRHHdepartment || !mayor) {
      throw new NotFoundException(
        'No se encontraron los datos necesarios para la aprobación de la solicitud',
      );
    }

    return { RRHHdepartment, mayor, RequesterDepartment };
  }
  async createRequest(
    EmployeeId: string,
    RequestTypeId: number,
    queryRunner: QueryRunner,
  ) {
    // 2. Create a new request
    const request = this.requestRepository.create({
      EmployeeId: EmployeeId,
      RequestTypeId: RequestTypeId,
    });

    return await queryRunner.manager.save(request);
  }

  async createApprovals(
    EmployeeId: string,
    departmentHeadId: string,
    RRHHHeadId: string,
    mayorId: string,
    requesterId: number,
  ) {
    const approvals: CreateRequestApprovalDto[] = [
      {
        approverId: departmentHeadId,
        processNumber: 1,
        current: false,
        RequestId: requesterId,
        requesterId: EmployeeId,
      },
      {
        approverId: RRHHHeadId,
        processNumber: 2,
        current: false,
        RequestId: requesterId,
        requesterId: EmployeeId,
      },
      {
        approverId: mayorId,
        processNumber: 3,
        current: false,
        RequestId: requesterId,
        requesterId: EmployeeId,
      },
    ];

    return approvals;
  }
  async autoApproveRequest(
    approvals: CreateRequestApprovalDto[],
    RequesterDepartment: Department,
    RRHHdepartment: Department,
    mayor: Employee,
    EmployeeId: string,
  ) {
    console.log(RequesterDepartment, RRHHdepartment, mayor);
    // If the department head is not assigned, or the department head is the employee who is requesting the vacation, the department approval is true
    if (
      !RequesterDepartment.departmentHeadId ||
      RequesterDepartment.departmentHeadId === EmployeeId
    ) {
      approvals[0].approved = true;
      approvals[0].observation =
        'La solicitud fue aprobada automáticamente por el sistema en el proceso 1 ya que el solicitante es el jefe del departamento en el que está asignado o no poseé jefe de departamento';
      approvals[0].ApprovedDate = new Date();
    }
    // If the RRHH  head is the employee who is requesting the vacation, the RRHH department approval is true (yeilin)
    if (RRHHdepartment.departmentHeadId === EmployeeId) {
      approvals[1].approved = true;
      approvals[1].observation =
        'La solicitud fue aprobada automáticamente por el sistema en el proceso 2 ya que el solicitante es el jefe del departamento de RRHH';
      approvals[1].ApprovedDate = new Date();
    }
    // If the mayor is the employee who is requesting the vacation, the mayor approval is true (teddy o vica)
    if (mayor.id === EmployeeId) {
      approvals[2].approved = true;
      approvals[2].observation =
        'La solicitud fue aprobada automáticamente por el sistema en el proceso 3 ya que el solicitante es Alcalde municipal';
      approvals[2].ApprovedDate = new Date();
    }

    // Set the first approval not approved as the current approval
    for (let i = 0; i < approvals.length; i++) {
      if (approvals[i].approved === undefined) {
        approvals[i].current = true;
        break;
      }
    }
  }

  async findAll() {
    return await this.requestVacationRepository.findAll();
  }

  async findOne(id: number) {
    return await this.requestVacationRepository.findOneById(id);
  }

  async update(id: number, updateRequestVacationDto: UpdateRequestVacationDto) {
    const requestToEdit = await this.requestVacationRepository.findOneById(id);

    if (!requestToEdit) {
      throw new NotFoundException('Solicitud no encontrada');
    }

    return await this.requestVacationRepository.save({
      ...requestToEdit,
      ...updateRequestVacationDto,
    });
  }

  async remove(id: number) {
    const requestToRemove =
      await this.requestVacationRepository.findOneById(id);

    if (!requestToRemove) {
      throw new NotFoundException('Solicitud no encontrada');
    }

    return await this.requestVacationRepository.remove(requestToRemove);
  }
}

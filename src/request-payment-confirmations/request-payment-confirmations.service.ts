import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRequestPaymentConfirmationDto } from './dto/create-request-payment-confirmation.dto';
import { UpdateRequestPaymentConfirmationDto } from './dto/update-request-payment-confirmation.dto';
import { RequestPaymentConfirmationRepository } from './repository/RequestPaymentConfirmation.repository';
import { DataSource } from 'typeorm';
import { EmployeesService } from 'src/employees/employees.service';
import { DepartmentsService } from 'src/departments/departments.service';
import { CreateRequestApprovalDto } from 'src/request-approvals/dto/create-request-approval.dto';
import { MailClientService } from 'src/mail-client/mail-client.service';
import { RequestsService } from 'src/requests/requests.service';
import { RequestApprovalRepository } from 'src/request-approvals/repository/request-approvals.repository';

@Injectable()
export class RequestPaymentConfirmationsService {
  constructor(
    private readonly paymentConfirmationRepository: RequestPaymentConfirmationRepository,
    private readonly dataSource: DataSource,
    private readonly employeeService: EmployeesService,
    private readonly departmentService: DepartmentsService,
    private readonly requestService: RequestsService,
    private readonly mailClient: MailClientService,
    private readonly requestApprovalRepository: RequestApprovalRepository,
  ) {}
  async create(
    createRequestPaymentConfirmationDto: CreateRequestPaymentConfirmationDto,
    EmployeeId: string,
  ) {
    // 1. Create a new transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // 2. Validate if the employee exists
      const existEmployee = await this.employeeService.findOneById(EmployeeId);

      if (!existEmployee) {
        throw new NotFoundException('El empleado no existe');
      }

      // 3. Validate if the RRHH department exists
      const RRHHdepartment =
        await this.departmentService.findOneByName('RECURSOS HUMANOS');

      if (!RRHHdepartment) {
        throw new NotFoundException(
          'No se pueede realizar una solicitud sin el departamento de recursos humanos',
        );
      }

      // 4. validate if RRHH deparment has a boos
      await this.departmentService.validateDepartmentHead(RRHHdepartment);

      // 5. Create a new request who will be related to the payment confirmation
      const request = await this.requestService.createRequest(
        EmployeeId,
        3, //requestTypeId 3 is for payment confirmation
        queryRunner,
      );

      // 6. Create a new payment confirmation request
      const newPaymentRequest = this.paymentConfirmationRepository.create({
        ...createRequestPaymentConfirmationDto,
        RequestId: request.id,
      });

      // 7. Save the payment confirmation request
      const savedPaymentRequest =
        await queryRunner.manager.save(newPaymentRequest);

      // 8. Create a new approval for the payment confirmation request
      const approval: CreateRequestApprovalDto = {
        approverId: RRHHdepartment.departmentHeadId,
        processNumber: 1,
        current: true,
        RequestId: request.id,
        requesterId: EmployeeId,
      };

      const approvalCreated = this.requestApprovalRepository.create(approval);

      await queryRunner.manager.save(approvalCreated);

      // 9. Commit the transaction
      await queryRunner.commitTransaction();

      // 10. Send an email to the boss of the RRHH department and the employee who made the request  (In progress)
      return savedPaymentRequest;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Errror al crear la solicitud');
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    return await this.paymentConfirmationRepository.findAll();
  }

  async findOne(id: number) {
    return await this.paymentConfirmationRepository.findOneById(id);
  }

  async update(
    id: number,
    updateRequestPaymentConfirmationDto: UpdateRequestPaymentConfirmationDto,
  ) {
    const paymentRequestToEdit =
      await this.paymentConfirmationRepository.findOneById(id);

    if (!paymentRequestToEdit) {
      throw new NotFoundException('No se encontró la solicitud a editar');
    }

    return await this.paymentConfirmationRepository.save({
      ...paymentRequestToEdit,
      ...updateRequestPaymentConfirmationDto,
    });
  }

  async remove(id: number) {
    const paymentRequestToRemove =
      await this.paymentConfirmationRepository.findOneById(id);

    if (!paymentRequestToRemove) {
      throw new NotFoundException('No se encontró la solicitud a eliminar');
    }

    return this.paymentConfirmationRepository.remove(paymentRequestToRemove);
  }
}

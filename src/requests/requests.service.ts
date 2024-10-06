import { Injectable, NotFoundException } from '@nestjs/common';
import { RequestRepository } from './repository/request.repository';
import { RequestsStateService } from 'src/requests-state/requests-state.service';
import { EmployeesService } from 'src/employees/employees.service';

@Injectable()
export class RequestsService {
  constructor(
    private readonly requestRepository: RequestRepository,
    private readonly requestStateRepository: RequestsStateService,
    private readonly employeeRepository: EmployeesService,
  ) {}

  async findAll() {
    return await this.requestRepository.findAll({
      relations: {
        RequestApprovals: true,
        RequestVacation: true,
        RequestSalaryCertificate: true,
        RequestPaymentConfirmation: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.requestRepository.findOneById(id);
  }

  async findAllRequestByEmployee(EmployeeId: string) {
    return await this.requestRepository.findAll({
      where: { EmployeeId },
      relations: {
        RequestApprovals: true,
        RequestVacation: true,
        RequestSalaryCertificate: true,
        RequestPaymentConfirmation: true,
      },
    });
  }

  async remove(id: number) {
    const requestToRemove = await this.requestRepository.findOneById(id);

    if (!requestToRemove) {
      throw new NotFoundException('solicitud no encontrada');
    }

    return await this.requestRepository.remove(requestToRemove);
  }
}

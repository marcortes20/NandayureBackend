import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
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

  async create(createRequestDto: CreateRequestDto) {
    const newRequest = this.requestRepository.create({
      ...createRequestDto,
      RequestStatus: { id: 1 }, // asegurar que el id 1 sea el de EN PROCESO
    });

    return await this.requestRepository.save(newRequest);
  }

  async findAll() {
    return await this.requestRepository.findAll();
  }

  async findOne(id: number) {
    return await this.requestRepository.findOneById(id);
  }

  async findAllMyRequest(EmployeeId: string) {
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

  // async update(id: number, updateRequestDto: UpdateRequestDto) {
  //   return `This action updates a #${id} request`;
  // }
  async update(id: number, updateRequestDto: UpdateRequestDto) {
    const newState = await this.requestStateRepository.findOne(
      updateRequestDto.requestStatusId,
    );

    if (!newState) {
      throw new NotFoundException('No se encontró el nuevo estado');
    }
    const requestToEdit = await this.requestRepository.findOneById(id);

    if (!requestToEdit) {
      throw new NotFoundException('solicitud no encontrada');
    }

    requestToEdit.RequestStatus.id = updateRequestDto.requestStatusId;

    return await this.requestRepository.save(requestToEdit);
  }

  async remove(id: number) {
    const requestToRemove = await this.requestRepository.findOneById(id);

    if (!requestToRemove) {
      throw new NotFoundException('solicitud no encontrada');
    }

    return await this.requestRepository.remove(requestToRemove);
  }
}

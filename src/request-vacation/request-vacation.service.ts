import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestVacationDto } from './dto/create-request-vacation.dto';
import { UpdateRequestVacationDto } from './dto/update-request-vacation.dto';
import { RequestVacationRepository } from './repository/Request-Vacation.repository';

@Injectable()
export class RequestVacationService {
  constructor(
    private readonly requestVacationRepository: RequestVacationRepository,
  ) {}

  async create(createRequestVacationDto: CreateRequestVacationDto) {
    const newVacationRequest = this.requestVacationRepository.create(
      createRequestVacationDto,
    );

    return await this.requestVacationRepository.save(newVacationRequest);
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

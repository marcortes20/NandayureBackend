import { Injectable } from '@nestjs/common';
import { CreateRequestVacationDto } from './dto/create-request-vacation.dto';
import { UpdateRequestVacationDto } from './dto/update-request-vacation.dto';

@Injectable()
export class RequestVacationService {
  create(createRequestVacationDto: CreateRequestVacationDto) {
    return 'This action adds a new requestVacation';
  }

  findAll() {
    return `This action returns all requestVacation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestVacation`;
  }

  update(id: number, updateRequestVacationDto: UpdateRequestVacationDto) {
    return `This action updates a #${id} requestVacation`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestVacation`;
  }
}

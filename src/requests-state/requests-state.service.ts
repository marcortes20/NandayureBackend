import { Injectable } from '@nestjs/common';
import { CreateRequestsStateDto } from './dto/create-requests-state.dto';
import { UpdateRequestsStateDto } from './dto/update-requests-state.dto';

@Injectable()
export class RequestsStateService {
  create(createRequestsStateDto: CreateRequestsStateDto) {
    return 'This action adds a new requestsState';
  }

  findAll() {
    return `This action returns all requestsState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestsState`;
  }

  update(id: number, updateRequestsStateDto: UpdateRequestsStateDto) {
    return `This action updates a #${id} requestsState`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestsState`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateOvertimeDto } from './dto/create-overtime.dto';
import { UpdateOvertimeDto } from './dto/update-overtime.dto';

@Injectable()
export class OvertimesService {
  create(createOvertimeDto: CreateOvertimeDto) {
    return 'This action adds a new overtime';
  }

  findAll() {
    return `This action returns all overtimes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} overtime`;
  }

  update(id: number, updateOvertimeDto: UpdateOvertimeDto) {
    return `This action updates a #${id} overtime`;
  }

  remove(id: number) {
    return `This action removes a #${id} overtime`;
  }
}

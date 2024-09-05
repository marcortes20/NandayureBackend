import { Injectable } from '@nestjs/common';
import { CreateEmbargoDto } from './dto/create-embargo.dto';
import { UpdateEmbargoDto } from './dto/update-embargo.dto';

@Injectable()
export class EmbargoesService {
  create(createEmbargoDto: CreateEmbargoDto) {
    return 'This action adds a new embargo';
  }

  findAll() {
    return `This action returns all embargoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} embargo`;
  }

  update(id: number, updateEmbargoDto: UpdateEmbargoDto) {
    return `This action updates a #${id} embargo`;
  }

  remove(id: number) {
    return `This action removes a #${id} embargo`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';

@Injectable()
export class StudiesService {
  create(createStudyDto: CreateStudyDto) {
    return 'This action adds a new study';
  }

  findAll() {
    return `This action returns all studies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} study`;
  }

  update(id: number, updateStudyDto: UpdateStudyDto) {
    return `This action updates a #${id} study`;
  }

  remove(id: number) {
    return `This action removes a #${id} study`;
  }
}

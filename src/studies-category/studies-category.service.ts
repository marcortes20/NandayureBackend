import { Injectable } from '@nestjs/common';
import { CreateStudiesCategoryDto } from './dto/create-studies-category.dto';
import { UpdateStudiesCategoryDto } from './dto/update-studies-category.dto';

@Injectable()
export class StudiesCategoryService {
  create(createStudiesCategoryDto: CreateStudiesCategoryDto) {
    return 'This action adds a new studiesCategory';
  }

  findAll() {
    return `This action returns all studiesCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studiesCategory`;
  }

  update(id: number, updateStudiesCategoryDto: UpdateStudiesCategoryDto) {
    return `This action updates a #${id} studiesCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} studiesCategory`;
  }
}

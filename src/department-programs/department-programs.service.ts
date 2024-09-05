import { Injectable } from '@nestjs/common';
import { CreateDepartmentProgramDto } from './dto/create-department-program.dto';
import { UpdateDepartmentProgramDto } from './dto/update-department-program.dto';

@Injectable()
export class DepartmentProgramsService {
  create(createDepartmentProgramDto: CreateDepartmentProgramDto) {
    return 'This action adds a new departmentProgram';
  }

  findAll() {
    return `This action returns all departmentPrograms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentProgram`;
  }

  update(id: number, updateDepartmentProgramDto: UpdateDepartmentProgramDto) {
    return `This action updates a #${id} departmentProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} departmentProgram`;
  }
}

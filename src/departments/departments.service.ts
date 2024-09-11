import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentRepository } from './repository/Department.repository';

@Injectable()
export class DepartmentsService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const newDepartment = this.departmentRepository.create(createDepartmentDto);

    return await this.departmentRepository.save(newDepartment);
  }

  async findAll() {
    return await this.findAll();
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOneById(id);
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const departmentToEdit = await this.departmentRepository.findOneById(id);

    if (!departmentToEdit) {
      throw new NotFoundException('Registro no encontrado');
    }

    return await this.departmentRepository.save({
      ...departmentToEdit,
      ...updateDepartmentDto,
    });
  }

  async remove(id: number) {
    const departmentToRemove = await this.departmentRepository.findOneById(id);

    if (!departmentToRemove) {
      throw new NotFoundException('Registro no encontrado');
    }
    return await this.departmentRepository.remove(departmentToRemove);
  }
}

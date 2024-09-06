import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOvertimeDto } from './dto/create-overtime.dto';
import { UpdateOvertimeDto } from './dto/update-overtime.dto';
import { OvertimeRepository } from './repository/overtime.repository';
import { EmployeesService } from 'src/employees/employees.service';

@Injectable()
export class OvertimesService {
  constructor(
    private readonly overtimeRepository: OvertimeRepository,
    private readonly employeeRepository: EmployeesService,
  ) {}

  async create(createOvertimeDto: CreateOvertimeDto) {
    const employeeExist = await this.employeeRepository.findOneById(
      createOvertimeDto.EmployeeId,
    );

    if (!employeeExist) {
      throw new NotFoundException('No existe el empleado seleccionado');
    }
    const newOvertime = this.overtimeRepository.create(createOvertimeDto);
    return await this.overtimeRepository.save(newOvertime);
  }

  async findAll() {
    return await this.overtimeRepository.findAll();
  }

  async findOne(id: number) {
    return await this.overtimeRepository.findOneById(id);
  }

  async update(id: number, updateOvertimeDto: UpdateOvertimeDto) {
    const overtimeToEdit = await this.overtimeRepository.findOneById(id);
    if (!overtimeToEdit) {
      throw new NotFoundException('No se encontró el registro a editar');
    }

    return await this.overtimeRepository.save({
      ...overtimeToEdit,
      ...updateOvertimeDto,
    });
  }

  async remove(id: number) {
    const overtimeToRemove = await this.overtimeRepository.findOneById(id);
    if (!overtimeToRemove) {
      throw new NotFoundException('No se encontró el registro a eliminar');
    }

    return await this.overtimeRepository.remove(overtimeToRemove);
  }
}

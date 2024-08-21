import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly userService: UsersService,
    private dataSource: DataSource,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    //AGREGAR TRANSACCIONES
    try {
      const existEmployee = await this.findOneById(
        createEmployeeDto.EmployeeId,
      );
      if (existEmployee != null) {
        throw new ConflictException({
          error: 'Ya existe un empleado con ese número de identificación',
        });
      }

      const existEmployeeWithMail = await this.findOneByEmail(
        createEmployeeDto.Email,
      );

      if (existEmployeeWithMail != null) {
        throw new ConflictException({
          error:
            'Ya existe un registro con esa direccion de correo electrinico',
        });
      }

      const newEmployee =
        await this.employeeRepository.create(createEmployeeDto);

      const created = await this.employeeRepository.save(newEmployee);

      await this.userService.Create({
        EmployeeId: createEmployeeDto.EmployeeId,
        Email: createEmployeeDto.Email,
      });

      return created;
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof ConflictException) {
        throw error; // Relanza la excepción específica
      }
      // Manejo de cualquier otra excepción no prevista
      throw new InternalServerErrorException({
        error: 'Error en la creacion de el usuario: ' + error.message,
      });
    }
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOneById(EmployeeId: number) {
    return await this.employeeRepository.findOneBy({ EmployeeId });
  }

  async findOneByEmail(Email: string) {
    return await this.employeeRepository.findOneBy({ Email });
  }

  async update(EmployeeId: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeToEdit = await this.employeeRepository.findOneBy({
      EmployeeId,
    });
    if (!employeeToEdit) {
      throw new BadRequestException({
        errror: 'No existe el usuario con numro de cédula:' + EmployeeId,
      });
    }

    return this.employeeRepository.save({
      ...employeeToEdit,
      ...updateEmployeeDto,
    });
  }

  async remove(EmployeeId: number) {
    return this.employeeRepository.softDelete({ EmployeeId });
  }
}

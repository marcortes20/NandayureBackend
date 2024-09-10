import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { UsersService } from 'src/users/users.service';
import { EmployeeRepository } from './repository/employee.repository';
import { MaritalStatusService } from 'src/marital-status/marital-status.service';
import { GendersService } from 'src/genders/genders.service';
import { DataSource } from 'typeorm';
import { JobPositionsService } from 'src/job-positions/job-positions.service';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly userService: UsersService,
    private readonly maritalStatusService: MaritalStatusService,
    private readonly genderService: GendersService,
    private readonly jobPositionService: JobPositionsService,
    private dataSource: DataSource,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await this.validateDataToCreate(createEmployeeDto);

      const newEmployee = this.employeeRepository.create(createEmployeeDto);

      const created = await queryRunner.manager.save(newEmployee);

      await this.userService.create(
        {
          id: created.id,
          Email: createEmployeeDto.Email,
        },
        queryRunner,
      );
      await queryRunner.commitTransaction();

      return created;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof ConflictException) {
        throw error;
      }
      // Manejo de cualquier otra excepción no prevista
      throw new InternalServerErrorException({
        error: 'Error en la creación del usuario: ' + error.message,
      });
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    try {
      return await this.employeeRepository.findAll();
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Error al obtener información de los empleados',
      );
    }
  }

  async findOneById(id: number) {
    return await this.employeeRepository.findOne({
      where: { id },
    });
  }

  async findOneByEmail(email: string) {
    return await this.employeeRepository.findOne({
      where: { Email: email },
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employeeToEdit = await this.findOneById(id);
    if (!employeeToEdit) {
      throw new BadRequestException(
        'No existe el usuario con número de cédula: ',
      );
    }

    await this.validateDataToUpdate(updateEmployeeDto);

    return this.employeeRepository.save({
      ...employeeToEdit,
      ...updateEmployeeDto,
    });
  }

  private async validateDataToCreate(dto: CreateEmployeeDto) {
    await this.validateEmployeeId(dto.id);
    await this.validateEmployeeEmail(dto.Email);
    await this.validateMaritalStatus(dto.MaritalStatusId);
    await this.validateGender(dto.GenderId);
  }

  private async validateDataToUpdate(dto: UpdateEmployeeDto) {
    if (dto.MaritalStatusId) {
      await this.validateMaritalStatus(dto.MaritalStatusId);
    }

    if (dto.GenderId) {
      await this.validateGender(dto.GenderId);
    }

    if (dto.JobPositionId) {
      await this.validateJobPosition(dto.JobPositionId);
    }

    if (dto.Email) {
      await this.validateEmployeeEmail(dto.Email);
    }
  }

  private async validateEmployeeId(id: number) {
    const existEmployee = await this.findOneById(id);
    if (existEmployee) {
      throw new ConflictException(
        'Ya existe un empleado con ese número de identificación',
      );
    }
  }

  private async validateEmployeeEmail(email: string) {
    const existEmployeeWithMail = await this.findOneByEmail(email);
    if (existEmployeeWithMail) {
      throw new ConflictException(
        'Ya existe un registro con esa dirección de correo electrónico',
      );
    }
  }

  private async validateMaritalStatus(maritalStatusId: number) {
    const existMaritalStatus =
      await this.maritalStatusService.findOneById(maritalStatusId);
    if (!existMaritalStatus) {
      throw new ConflictException('No existe el estado civil seleccionado');
    }
  }

  private async validateGender(genderId: number) {
    const existGender = await this.genderService.findOneById(genderId);
    if (!existGender) {
      throw new ConflictException('No existe el género seleccionado');
    }
  }
  private async validateJobPosition(JobPositionId: number) {
    const existGender =
      await this.jobPositionService.findOneById(JobPositionId);
    if (!existGender) {
      throw new ConflictException('No existe el puesto seleccionado');
    }
  }

  // async remove(EmployeeId: number) {
  //   // return this.employeeRepository.softDelete({ EmployeeId });
  //   // this.userService.
  // }
}

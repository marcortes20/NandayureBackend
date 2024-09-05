import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { EmployeeRepositoryInterface } from './employee.interface';

export class EmployeeRepository
  extends BaseAbstractRepostitory<Employee>
  implements EmployeeRepositoryInterface
{
  constructor(
    @InjectRepository(Employee)
    private readonly employeeGenericRepository: Repository<Employee>,
  ) {
    super(employeeGenericRepository);
  }
}

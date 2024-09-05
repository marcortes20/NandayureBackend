import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { Employee } from '../entities/employee.entity';

export interface EmployeeRepositoryInterface
  extends BaseInterfaceRepository<Employee> {}

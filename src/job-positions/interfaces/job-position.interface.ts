import { Employee } from 'src/employees/entities/employee.entity';

export interface IJobPosition {
  id?: number;
  Name: string;
  Description: string;
  baseSalary: number;
  globalSalary: number;
  extrafees: number;
  Employees?: Employee;
}

import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JobPosition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Description: string;

  @Column('decimal', { precision: 10, scale: 4 })
  baseSalary: number;

  @Column('decimal', { precision: 10, scale: 4 })
  globalSalary: number;

  @Column('decimal', { precision: 10, scale: 4 })
  extrafees: number;

  @OneToMany(() => Employee, (employee) => employee.JobPosition)
  Employees: Employee;
}

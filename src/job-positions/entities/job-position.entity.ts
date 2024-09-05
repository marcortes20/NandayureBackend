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

  @Column('decimal', { precision: 10, scale: 2 })
  baseSalary: number;

  @Column('decimal', { precision: 10, scale: 2 })
  globalSalary: number;

  @Column('decimal', { precision: 10, scale: 2 })
  extrafees: number;

  @OneToMany(() => Employee, (employee) => employee.JopPosition)
  Employees: Employee;
}

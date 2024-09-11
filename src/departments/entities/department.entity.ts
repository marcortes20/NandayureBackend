import { BudgetCode } from 'src/budget-codes/entities/budget-code.entity';
import { DepartmentProgram } from 'src/department-programs/entities/department-program.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  departmentProgramId: number;

  @ManyToOne(
    () => DepartmentProgram,
    (departmentProgram) => departmentProgram.Departments,
  )
  @JoinColumn({ name: 'departmentProgramId' })
  departmentProgram: DepartmentProgram;

  @OneToMany(() => Employee, (employee) => employee.Department)
  Employees: Employee[];

  @OneToMany(() => BudgetCode, (budgetCode) => budgetCode.departmentProgram)
  BudgetCode: BudgetCode[];
}

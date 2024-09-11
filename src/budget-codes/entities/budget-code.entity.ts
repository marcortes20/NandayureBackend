import { DepartmentProgram } from 'src/department-programs/entities/department-program.entity';
import { Department } from 'src/departments/entities/department.entity';
import { TypeBudgetCode } from 'src/type-budget-codes/entities/type-budget-code.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BudgetCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: number;

  @Column()
  departmentProtgramId: number;

  @Column()
  departmentId: number;

  @Column()
  budgetCodeId: number;

  @ManyToOne(
    () => DepartmentProgram,
    (departmentProgram) => departmentProgram.BudgetCode,
  )
  @JoinColumn({ name: 'departmentProtgramId' })
  departmentProgram: DepartmentProgram;

  @ManyToOne(() => Department, (department) => department.BudgetCode, {
    nullable: true,
  })
  @JoinColumn({ name: 'departmentId' })
  Department: Department;

  @ManyToOne(
    () => TypeBudgetCode,
    (typeBudgetCode) => typeBudgetCode.BudgetCodes,
  )
  @JoinColumn({ name: 'budgetCodeId' })
  typeBudgetCode: TypeBudgetCode;
}

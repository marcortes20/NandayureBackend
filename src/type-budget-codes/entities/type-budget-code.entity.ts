import { BudgetCode } from 'src/budget-codes/entities/budget-code.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeBudgetCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BudgetCode, (budgetCode) => budgetCode.typeBudgetCode)
  BudgetCodes: BudgetCode[];
}

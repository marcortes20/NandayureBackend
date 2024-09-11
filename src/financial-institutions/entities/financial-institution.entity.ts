import { TypeFinancialInstitution } from 'src/type-financial-institutions/entities/type-financial-institution.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FinancialInstitution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  TypeFinancialInstitutionId: number;

  @Column()
  name: string;

  @Column()
  percentage: number;

  @ManyToOne(
    () => TypeFinancialInstitution,
    (typeFinancialInstitution) =>
      typeFinancialInstitution.FinancialInstitutions,
  )
  @JoinColumn({ name: 'TypeFinancialInstitutionId' })
  TypeFinancialInstitution: TypeFinancialInstitution;
}

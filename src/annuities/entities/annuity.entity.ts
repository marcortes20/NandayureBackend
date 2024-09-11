import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Annuity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Date: Date;

  @Column()
  Description: string;

  @Column('decimal', { precision: 10, scale: 4 })
  Amount: number;

  @ManyToOne(() => Employee, (employee) => employee.annuities)
  employee: Employee;
}

import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Overtime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Date: Date;

  @Column()
  Hours: number;

  @ManyToOne(() => Employee, (employee) => employee.overtimes)
  employee: Employee;
}

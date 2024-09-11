import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  Date: Date;

  @Column({ type: 'time' })
  ArrivalTime: string;

  @Column({ type: 'time' })
  lunchBreakStart: string;

  @Column({ type: 'time' })
  lunchBreakEnd: string;

  @Column({ type: 'time' })
  departureTime: string;

  @ManyToOne(() => Employee, (employee) => employee.attendances)
  employee: Employee;
}

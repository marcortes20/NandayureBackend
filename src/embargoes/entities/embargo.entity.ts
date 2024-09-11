import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Embargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: 8 })
  percentage: number;

  @OneToMany(() => Employee, (employee) => employee.embargo)
  employees: Employee[];
}

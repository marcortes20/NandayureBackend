import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Training {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @ManyToMany(() => Employee, (employee) => employee.trainings)
  employees: Employee[];
}

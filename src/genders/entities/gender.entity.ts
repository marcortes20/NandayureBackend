import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @OneToMany(() => Employee, (employee) => employee.Gender)
  employees: Employee[];
}

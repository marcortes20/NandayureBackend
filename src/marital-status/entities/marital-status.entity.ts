import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaritalStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  Name: string;

  @Column()
  Description: string;

  @OneToMany(() => Employee, (employee) => employee.MaritalStatus)
  employees: Employee[];
}

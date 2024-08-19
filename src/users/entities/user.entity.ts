import { Exclude } from 'class-transformer';
import { Employee } from 'src/employees/entities/employee.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserId: number;

  @Column()
  EmployeeId: number;

  @Column()
  @Exclude()
  Password: string;

  @OneToOne(() => Employee, (employee) => employee.User)
  @JoinColumn({ name: 'EmployeeId' })
  Employee: Employee;

  @ManyToMany(() => Role)
  @JoinTable({ name: 'user_roles' })
  //@Transform(({ value }) => value.RoleName)
  Roles: Role[];

  @DeleteDateColumn()
  deletedAt?: Date;
}

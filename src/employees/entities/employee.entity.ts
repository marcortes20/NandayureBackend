import { Gender } from 'src/genders/entities/gender.entity';
import { MaritalStatus } from 'src/marital-status/entities/marital-status.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryColumn({ unique: true })
  EmployeeId: number;

  @Column()
  Name: string;

  @Column()
  Surname1: string;

  @Column()
  Surname2: string;

  @Column()
  Birthdate: Date;

  @Column()
  HiringDate: Date;

  @Column()
  Email: string;

  @Column()
  CellPhone: string;

  @Column()
  NumberChlidren: number;

  @Column()
  AvailableVacationDays: number;

  // @Column()
  // GrossSalary: number;

  @OneToOne(() => User, (user) => user.Employee)
  User: User;

  @ManyToOne(() => MaritalStatus, (maritalStatus) => maritalStatus.employees)
  MaritalStatus: MaritalStatus;

  @ManyToOne(() => Gender, (gender) => gender.employees)
  Gender: Gender;

  @DeleteDateColumn()
  deletedAt?: Date;

  //future relations
}

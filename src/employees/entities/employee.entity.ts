import { Gender } from 'src/genders/entities/gender.entity';
import { JobPosition } from 'src/job-positions/entities/job-position.entity';
import { MaritalStatus } from 'src/marital-status/entities/marital-status.entity';
import { Training } from 'src/trainings/entities/training.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryColumn()
  id: number;

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

  @ManyToOne(() => JobPosition, (jobPosition) => jobPosition.Employees)
  JopPosition: JobPosition;

  @ManyToMany(() => Training, (training) => training.employees)
  @JoinTable({ name: 'employee-training' })
  trainings: Training[];

  @DeleteDateColumn()
  deletedAt?: Date;

  //future relations
}

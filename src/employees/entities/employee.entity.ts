import { Annuity } from 'src/annuities/entities/annuity.entity';
import { Attendance } from 'src/attendance/entities/attendance.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Embargo } from 'src/embargoes/entities/embargo.entity';
import { Gender } from 'src/genders/entities/gender.entity';
import { JobPosition } from 'src/job-positions/entities/job-position.entity';
import { MaritalStatus } from 'src/marital-status/entities/marital-status.entity';
import { Overtime } from 'src/overtimes/entities/overtime.entity';
import { Request } from 'src/requests/entities/request.entity';
import { Study } from 'src/studies/entities/study.entity';
import { Training } from 'src/trainings/entities/training.entity';
import { User } from 'src/users/entities/user.entity';

import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryColumn()
  id: string;

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

  @Column()
  JobPositionId: number;

  @Column()
  GenderId: number;

  @Column()
  MaritalStatusId: number;

  @Column()
  DepartmentId: number;

  @Column()
  EmbargoId: number;

  @OneToOne(() => User, (user) => user.Employee)
  User: User;

  @ManyToOne(() => MaritalStatus, (maritalStatus) => maritalStatus.employees)
  @JoinColumn({ name: 'MaritalStatusId' })
  MaritalStatus: MaritalStatus;
  //relacion marcada como opcional para etapa de desarrrollo
  @ManyToOne(() => Department, (department) => department.Employees, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;

  @ManyToOne(() => Gender, (gender) => gender.employees)
  @JoinColumn({ name: 'GenderId' })
  Gender: Gender;

  //relacion marcada como opcional para etapa de desarrrollo
  @ManyToOne(() => Embargo, (embargo) => embargo.employees, {
    nullable: true,
  })
  @JoinColumn({ name: 'EmbargoId' })
  embargo: Embargo;

  //relacion marcada como opcional para etapa de desarrrollo
  @ManyToOne(() => JobPosition, (jobPosition) => jobPosition.Employees, {
    nullable: true,
  })
  @JoinColumn({ name: 'JobPositionId' })
  JobPosition: JobPosition;

  @ManyToMany(() => Training, (training) => training.employees)
  @JoinTable({ name: 'employee-training' })
  trainings: Training[];

  @ManyToMany(() => Study, (study) => study.Employees)
  @JoinTable({ name: 'employee-studies' })
  Studies: Study[];

  @OneToMany(() => Annuity, (annuity) => annuity.employee)
  annuities: Annuity[];

  @OneToMany(() => Overtime, (overtime) => overtime.employee)
  overtimes: Overtime[];

  @OneToMany(() => Attendance, (attendance) => attendance.employee)
  attendances: Attendance[];

  @OneToMany(() => Request, (request) => request.Employee)
  requests: Request[];

  @DeleteDateColumn()
  deletedAt?: Date;

  // future relations
}

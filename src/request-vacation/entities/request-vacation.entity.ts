import { Request } from 'src/requests/entities/request.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RequestVacation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  daysRequested: number;

  @Column()
  departureDate: Date;

  @Column()
  entryDate: Date;

  @Column({ nullable: true, default: null })
  departmentApproval: boolean;

  @Column({ nullable: true, default: null })
  RRHHApproval: boolean;

  @Column({ nullable: true, default: null })
  mayorApproval: boolean;

  @Column({ unique: true })
  RequestId: number;

  @OneToOne(() => Request, (request) => request.RequestVacation)
  @JoinColumn({ name: 'RequestId' })
  Request: Request;
}

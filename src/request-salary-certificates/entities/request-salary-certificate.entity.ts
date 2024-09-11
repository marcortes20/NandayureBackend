import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Request } from 'src/requests/entities/request.entity';

@Entity()
export class RequestSalaryCertificate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date; // fecha en la que quiere que le generen la boleta de acuerdo con su pago quincenal

  @Column({ nullable: true })
  reason: string;

  @Column({ unique: true })
  RequestId: number;

  @OneToOne(() => Request, (request) => request.RequestVacation)
  @JoinColumn({ name: 'RequestId' })
  Request: Request;
}

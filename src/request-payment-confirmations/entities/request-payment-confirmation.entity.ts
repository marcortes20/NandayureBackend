import { Request } from 'src/requests/entities/request.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RequestPaymentConfirmation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date; // fecha en la que quiere que le generen la boleta de acuerdo con su pago quincenal

  @Column({ nullable: true })
  reason: string;

  @Column({ unique: true })
  RequestId: number;

  @OneToOne(() => Request, (request) => request.RequestPaymentConfirmation)
  @JoinColumn({ name: 'RequestId' })
  Request: Request;
}

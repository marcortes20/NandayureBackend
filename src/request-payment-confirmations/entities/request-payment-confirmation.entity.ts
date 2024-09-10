import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RequestPaymentConfirmation {
  @PrimaryGeneratedColumn()
  id: number;
}

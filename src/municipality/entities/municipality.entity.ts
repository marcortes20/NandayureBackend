import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Municipality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  gmail: string;
}

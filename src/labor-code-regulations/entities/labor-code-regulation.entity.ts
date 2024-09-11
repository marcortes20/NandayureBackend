import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LaborCodeRegulation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 4 })
  minimumAmount: number;

  @Column('decimal', { precision: 10, scale: 4 })
  maximumAmount: number;

  @Column()
  percentage: number;

  @Column({ nullable: true })
  description: string;
}

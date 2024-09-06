import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AttendanceStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;
}

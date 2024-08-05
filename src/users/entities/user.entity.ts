import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ unique: true })
  User_ID: number;

  @Column()
  Name: string;

  @Column()
  Mail: string;

  @Column()
  UserName: string;

  @Column()
  @Exclude()
  Password: string;
}

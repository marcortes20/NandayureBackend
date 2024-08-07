import { Exclude } from 'class-transformer';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ unique: true })
  UserId: number;

  @Column()
  Name: string;

  @Column()
  Mail: string;

  @Column()
  UserName: string;

  @Column()
  @Exclude()
  Password: string;

  @ManyToMany(() => Role)
  @JoinTable()
  //@Transform(({ value }) => value.RoleName)
  Roles: Role[];
}

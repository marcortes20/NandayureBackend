import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  Mail: string;

  @IsString()
  UserName: string;

  @IsNotEmpty()
  Password: string;

  // @IsArray()
  // roles: number[] = [2];
}

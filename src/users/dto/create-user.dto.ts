import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @Transform(({ value }) => parseInt(value, 10))
  @IsNotEmpty()
  @IsNumber()
  EmployeeId: number;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  // @IsArray()
  // roles: number[] = [2];
}

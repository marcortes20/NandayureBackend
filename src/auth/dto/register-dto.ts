import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsNumber()
  UserId: number;

  @ApiProperty()
  @IsEmail()
  Mail: string;

  @ApiProperty()
  @IsString()
  UserName: string;

  @ApiProperty()
  @IsString()
  Name: string;

  @ApiProperty()
  @IsNotEmpty()
  Password: string;
}

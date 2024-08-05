import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsNumber()
  User_ID: number;

  @ApiProperty()
  @IsString()
  Password: string;

  // @IsArray()
  // roles: number[] = [2];
}

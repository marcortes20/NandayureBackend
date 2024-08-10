import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateDto {
  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  UserId: number;

  @IsOptional()
  @ApiProperty()
  @IsEmail()
  Mail: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  UserName: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  Name: string;

  @IsOptional()
  @ApiProperty()
  @IsNotEmpty()
  Password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsOptional()
  csrfToken: string;

  @Transform(({ value }) => parseInt(value, 10))
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  UserId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Password: string;
}

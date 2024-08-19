import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMaritalStatusDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Description: string;
}

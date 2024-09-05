import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMaritalStatusDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  Name: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  Description: string;
}

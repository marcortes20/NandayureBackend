import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateJobPositionDto {
  @ApiPropertyOptional()
  @IsString()
  Name: string;

  @ApiPropertyOptional()
  @IsString()
  Description: string;

  @ApiPropertyOptional()
  @IsNumber()
  baseSalary: number;

  @ApiPropertyOptional()
  @IsNumber()
  globalSalary: number;

  @ApiPropertyOptional()
  @IsNumber()
  extrafees: number;
}

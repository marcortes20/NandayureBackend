import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateEmployeeDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Surname1?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Surname2?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  Birthdate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  HiringDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Mail?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  CellPhone?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  NumberChlidren?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  AvailableVacationDays?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  GrossSalary?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  MaritalStatusId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  GenderId?: number;
}

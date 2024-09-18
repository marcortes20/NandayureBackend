import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLaborCodeRegulationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  minimumAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal()
  maximumAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  percentage: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}

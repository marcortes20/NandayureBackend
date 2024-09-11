import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBudgetCodeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  departmentProtgramId: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumber()
  departmentId?: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumber()
  budgetCodeId: number;
}

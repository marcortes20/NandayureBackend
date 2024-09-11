import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateOvertimeDto } from './create-overtime.dto';
import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateOvertimeDto extends PartialType(CreateOvertimeDto) {
  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsDateString()
  Date: Date;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsInt()
  Hours: number;
}

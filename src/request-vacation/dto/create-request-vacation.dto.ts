import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateRequestVacationDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  daysRequested: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  departureDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  entryDate: Date;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  departmentApproval: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  RRHHApproval: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  mayorApproval: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  RequestId: number;
}

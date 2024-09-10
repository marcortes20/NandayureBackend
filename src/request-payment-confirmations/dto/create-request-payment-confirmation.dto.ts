import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRequestPaymentConfirmationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  date: Date; //fecha con la que se toma informacion de una planilla para generar boleta

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  RequestId: number;
}

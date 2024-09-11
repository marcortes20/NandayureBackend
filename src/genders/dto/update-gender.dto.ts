import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGenderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Name: string;
}

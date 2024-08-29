import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';
export class CreateMunicipalityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(8, 15)
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Length(5, 100)
  gmail: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenderDto {
  @IsNotEmpty()
  @IsString()
  Name: string;
}

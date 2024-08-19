import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateMailClientDto {
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  message: string;
}

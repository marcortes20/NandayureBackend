export class CreateMailClientDto {
  to: string;

  subject: string;

  message?: string;

  EmployeeId?: number;

  Password?: string;

  LoginURL?: string;

  RecoverPasswordURL?: string;
}

import {
  //ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login-dto';
//import { RegisterDto } from './dto/register-dto';
import { JwtService } from '@nestjs/jwt';
//import { UpdateDto } from './dto/update-dto';
import { MailClientService } from 'src/mail-client/mail-client.service';
//import { SendmailerService } from 'src/sendmailer/sendmailer.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
    private readonly mailClient: MailClientService,
  ) {}

  async login({ EmployeeId, Password }: LoginDto) {
    try {
      const userToLogin = await this.userService.findOne(EmployeeId);
      if (!userToLogin) {
        throw new UnauthorizedException({
          error: 'No existe ese número de identificacion en el sistema',
        });
      }

      // const IsCorrectPassword = await bcrypt.compare(
      //   Password,
      //   userToLogin.Password,
      // );

      const IsCorrectPassword = await this.comparePasswords(
        Password,
        userToLogin.Password,
      );

      if (!IsCorrectPassword) {
        throw new UnauthorizedException({
          error: 'Contraseña incorrecta',
        });
      }

      const rolesNames = userToLogin.Roles?.map((role) => role.RoleName);
      const payload = {
        id: userToLogin.EmployeeId,
        roles: rolesNames,
      };

      return {
        name: userToLogin.Employee.Name,
        surname1: userToLogin.Employee.Surname1,
        surname2: userToLogin.Employee.Surname2,
        email: userToLogin.Employee.Email,
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof UnauthorizedException) {
        throw error; // Relanza la excepción específica
      }
      // Manejo de cualquier otra excepción no prevista
      throw new InternalServerErrorException({
        error: 'Error en el inicio de sesión: ' + error.message,
      });
    }
  }

  async comparePasswords(passwordToCompare: string, mainPassword: string) {
    const IsCorrectPassword = await bcrypt.compare(
      passwordToCompare,
      mainPassword,
    );

    return IsCorrectPassword;
  }

  async changePassword(
    EmployeeId: number,
    oldPassword: string,
    newPassword: string,
  ) {
    const userToEdit = await this.userService.findOneById(EmployeeId);

    if (!userToEdit) {
      throw new NotFoundException('Usurio no encontrado!');
    }

    const IsCorrectPassword = await this.comparePasswords(
      oldPassword,
      userToEdit.Password,
    );
    if (!IsCorrectPassword) {
      throw new UnauthorizedException('Contraseña actual invalida');
    }

    return this.userService.updatePassword(EmployeeId, newPassword);
  }

  async forgotPassword(Email: string) {
    const userToEdit = await this.userService.findOneByEmail(Email);
    if (userToEdit) {
      const payload = {
        id: userToEdit.EmployeeId,
        Email: userToEdit.Employee.Email,
      };
      const token = await this.jwtService.signAsync(payload);
      const baseURL = 'https://www.tuaplicacion.com/reset-password';
      const url = `${baseURL}?token=${token}`;

      await this.mailClient.sendMail({
        to: Email,
        subject: 'Recuperacion de constraseña',
        message: `utilice el siguiente linnk para recuperar su contraseña ${url}`,
      });
      //AQUI SE ENVIA EL CORREO
      //return { access_token: await this.jwtService.signAsync(payload) };
    }

    return {
      message:
        'Si el usuario es valido recibirá un email en breve para la recuperación',
    };
  }
}

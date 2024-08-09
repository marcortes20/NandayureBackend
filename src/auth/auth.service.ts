import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register-dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateDto } from './dto/update-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register({ UserId, Mail, Name, Password, UserName }: RegisterDto) {
    try {
      const alreadyExist = await this.userService.findOneById(UserId);

      if (alreadyExist != null) {
        throw new ConflictException({
          error: 'Ya existe un usuario con ese numero de identificación',
        });
      }

      return this.userService.Register({
        UserId,
        Mail,
        Name,
        Password: await bcrypt.hash(Password, 10),
        UserName,
      });
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof ConflictException) {
        throw error; // Relanza la excepción específica
      }
      // Manejo de cualquier otra excepción no prevista
      throw new InternalServerErrorException({
        error: 'Error en el inicio de sesión: ' + error.message,
      });
    }
  }

  async login({ UserId, Password }: LoginDto) {
    try {
      const userToLogin = await this.userService.findOne(UserId);
      if (!userToLogin) {
        throw new UnauthorizedException({
          error: 'No existe ese número de identificacion en el sistema',
        });
      }

      const IsCorrectPassword = await bcrypt.compare(
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
        id: userToLogin.UserId,
        roles: rolesNames,
      };

      return {
        id: userToLogin.UserId,
        name: userToLogin.Name,
        email: userToLogin.Mail,
        access_token: await this.jwtService.signAsync(payload),
        roles: userToLogin.Roles,
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

  async update({ UserId, Mail, Name, Password, UserName }: UpdateDto) {
    console.log(UserId, Mail, Name, Password, UserName);
    // try {
    //   const alreadyExist = await this.userService.findOneById(UserId);
    //   if (alreadyExist != null) {
    //     throw new ConflictException({
    //       error: 'Ya existe un usuario con ese numero de identificación',
    //     });
    //   }
    //   return this.userService.Register({
    //     UserId,
    //     Mail,
    //     Name,
    //     Password: await bcrypt.hash(Password, 10),
    //     UserName,
    //   });
    // } catch (error) {
    //   console.error('Error:', error);
    //   if (error instanceof ConflictException) {
    //     throw error; // Relanza la excepción específica
    //   }
    //   // Manejo de cualquier otra excepción no prevista
    //   throw new InternalServerErrorException({
    //     error: 'Error en el inicio de sesión: ' + error.message,
    //   });
    // }
  }
}

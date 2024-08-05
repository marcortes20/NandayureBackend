import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register({ User_ID, Mail, Name, Password, UserName }: RegisterDto) {
    const alreadyExist = await this.userService.findOneById(User_ID);

    if (alreadyExist != null) {
      throw new ConflictException({
        error: 'Ya existe un usuario con ese numero de identificación',
      });
    }

    return this.userService.Register({
      User_ID,
      Mail,
      Name,
      Password: await bcrypt.hash(Password, 10),
      UserName,
    });
  }

  async login({ User_ID, Password }: LoginDto) {
    const userToLogin = await this.userService.findOneById(User_ID);
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

    const payload = { roles: ['ADMIN', 'USER'], id: User_ID };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

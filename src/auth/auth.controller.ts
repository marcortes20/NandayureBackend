import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register-dto';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './auth-roles/roles.decorator';
import { Role } from './auth-roles/role.enum';
import { UpdateDto } from './dto/update-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  // @UsePipes(new ValidationPipe({ transform: true }))
  async Login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
  @Post('register')
  async Register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }
  @UseGuards(AuthGuard)
  @Patch('update')
  Update(@Body() updateDto: UpdateDto) {
    return this.authService.update(updateDto);
  }

  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @UseGuards(AuthGuard)
  @Get()
  async SayHi(@Req() request: Request) {
    //request trae el payload desencriptado de el guard
    const user = (request as any).user; //buscar la forma de agregar tipo aqui y en el guard
    console.log(user);
    return;
  }

  @Post('sendMail')
  async mail() {
    return await this.authService.sendMaild();
  }
}

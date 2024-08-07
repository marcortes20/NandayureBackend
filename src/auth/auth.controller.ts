import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register-dto';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './auth-roles/roles.decorator';
import { Role } from './auth-roles/role.enum';

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
  Register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Get()
  SayHi() {
    return 'Hi';
  }
}

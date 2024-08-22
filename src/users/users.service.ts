import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//import { RegisterDto } from 'src/auth/dto/register-dto';
import { Role } from 'src/roles/entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import * as generatePassword from 'generate-password';
import { MailClientService } from 'src/mail-client/mail-client.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly mailClient: MailClientService,
    private readonly configService: ConfigService,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  async findOneById(EmployeeId: number) {
    try {
      return await this.userRepository.findOneBy({ EmployeeId });
    } catch (error) {
      throw new InternalServerErrorException({
        error: 'Error: ' + error.message,
      });
    }
  }

  async findOneByEmail(Email: string) {
    try {
      return await this.userRepository.findOne({
        relations: {
          Employee: true,
        },
        where: {
          Employee: {
            Email: Email,
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException({
        error: 'Error: ' + error.message,
      });
    }
  }

  async findOne(EmployeeId: number) {
    try {
      const userToSearch = await this.userRepository.findOne({
        relations: {
          Roles: true,
          Employee: true,
        },
        where: {
          EmployeeId,
        },
      });
      return userToSearch;
    } catch (error) {
      throw new InternalServerErrorException({
        error: 'Error: ' + error.message,
      });
    }
  }

  async Create(createUserDto: CreateUserDto) {
    try {
      console.log(createUserDto);
      const initialRole = await this.roleRepository.findOneBy({
        RoleName: 'USER',
      });
      const password = await generatePassword.generate({
        length: 6,
        numbers: true,
      });
      const user = await this.userRepository.create({
        EmployeeId: createUserDto.EmployeeId,
        Password: await bcrypt.hash(password, 10),
        Roles: [initialRole],
      });
      await this.mailClient.sendWelcomeMail({
        to: createUserDto.Email,
        subject: 'Bienvenido',
        LoginURL: await this.configService.get('FrontEndLoginURL'),
      });
      return await this.userRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'Error: ' + error.message,
      });
    }
  }

  async updatePassword(EmployeeId: number, newPassword: string) {
    const userToEdit = await this.findOneById(EmployeeId);
    userToEdit.Password = await bcrypt.hash(newPassword, 10);
    return await this.userRepository.save(userToEdit);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

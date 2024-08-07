import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dto/register-dto';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  async findOneById(UserId: number) {
    try {
      return await this.userRepository.findOneBy({ UserId });
    } catch (error) {
      throw new InternalServerErrorException({
        error: 'Error: ' + error.message,
      });
    }
  }

  async findOne(UserId: number) {
    try {
      const userToSearch = await this.userRepository.findOne({
        relations: {
          ['Roles']: true,
        },
        where: {
          UserId,
        },
      });
      return userToSearch;
    } catch (error) {
      throw new InternalServerErrorException({
        error: 'Error: ' + error.message,
      });
    }
  }

  async Register(registerDto: RegisterDto) {
    try {
      const initialRole = await this.roleRepository.findOneBy({
        RoleName: 'USER',
      });

      const user = this.userRepository.create({
        UserId: registerDto.UserId,
        Mail: registerDto.Mail,
        UserName: registerDto.UserName,
        Password: registerDto.Password,
        Name: registerDto.Name,
        Roles: [initialRole],
      });
      return this.userRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'Error: ' + error.message,
      });
    }
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

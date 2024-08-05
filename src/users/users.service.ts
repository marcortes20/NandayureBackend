import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/dto/register-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  async findOneById(User_ID: number) {
    return await this.userRepository.findOneBy({ User_ID });
  }

  async Register(registerDto: RegisterDto) {
    const user = this.userRepository.create({
      User_ID: registerDto.User_ID,
      Mail: registerDto.Mail,
      UserName: registerDto.UserName,
      Password: registerDto.Password,
      Name: registerDto.Name,
    });
    return this.userRepository.save(user);
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

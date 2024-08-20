import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
  constructor(
    @InjectRepository(Gender)
    private readonly gendersService: Repository<Gender>,
  ) {}

  async onModuleInit() {
    const defaulGenres: CreateGenderDto[] = [
      {
        Name: 'Masculino',
      },
      {
        Name: 'Femenino',
      },
    ];

    for (const genre of defaulGenres) {
      try {
        await this.create(genre);
      } catch (error) {
        console.error(`Error creating role ${genre.Name}:`, error.message);
      }
    }
  }

  async create(createGenderDto: CreateGenderDto) {
    try {
      const existGenre = await this.findOneByName(createGenderDto.Name);
      if (existGenre) {
        return {
          message: 'El genero ya existe',
          Genero: existGenre.Name,
        };
      }

      const newGenre = this.gendersService.create(createGenderDto);
      return this.gendersService.save(newGenre);
    } catch (error) {
      console.error('Error:', error);
      // Manejo de cualquier otra excepción no prevista
      throw new InternalServerErrorException({
        message: 'Error al crear un estado civil: ' + error.message,
      });
    }
  }

  findAll() {
    return this.gendersService.find();
  }

  findOneByName(Name: string) {
    return this.gendersService.findOneBy({ Name });
  }

  update(id: number, updateGenderDto: UpdateGenderDto) {
    return `This action updates a #${id} gender`;
  }

  remove(id: number) {
    return `This action removes a #${id} gender`;
  }
}

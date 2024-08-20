import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMaritalStatusDto } from './dto/create-marital-status.dto';
import { UpdateMaritalStatusDto } from './dto/update-marital-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MaritalStatus } from './entities/marital-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaritalStatusService {
  constructor(
    @InjectRepository(MaritalStatus)
    private readonly maritarStatusRepository: Repository<MaritalStatus>,
  ) {}

  async onModuleInit() {
    const defaulMaritalStatus: CreateMaritalStatusDto[] = [
      {
        Name: 'Soltero(@)',
        Description: 'Persona que no ha contraído matrimonio.',
      },
      {
        Name: 'Casado(@)',
        Description: 'Persona que ha contraído matrimonio.',
      },
      {
        Name: 'Divorciado(@)',
        Description: 'Persona que ha disuelto legalmente su matrimonio.',
      },
      {
        Name: 'Viudo(@)',
        Description:
          'Persona cuyo cónyuge ha fallecido y no se ha vuelto a casar.',
      },
      {
        Name: 'Separado(@)',
        Description:
          'Persona que está separada de su cónyuge pero no legalmente divorciada.',
      },
      {
        Name: 'Unión Libre',
        Description:
          'Persona que vive en una relación de pareja estable y permanente sin haber contraído matrimonio legal.',
      },
      {
        Name: 'Comprometid(a)',
        Description:
          ' Persona que ha aceptado una propuesta de matrimonio, pero aún no se ha casado.',
      },
    ];

    for (const status of defaulMaritalStatus) {
      try {
        await this.create(status);
      } catch (error) {
        console.error(`Error creating role ${status.Name}:`, error.message);
      }
    }
  }
  async create(createMaritalStatusDto: CreateMaritalStatusDto) {
    try {
      const existStatus = await this.findOneByName(createMaritalStatusDto.Name);

      if (existStatus) {
        return {
          message: 'El estado civil ya existe',
          Estado: existStatus.Name,
        };
      }

      const newMaritalStatus = await this.maritarStatusRepository.create(
        createMaritalStatusDto,
      );
      return this.maritarStatusRepository.save(newMaritalStatus);
    } catch (error) {
      console.error('Error:', error);
      // Manejo de cualquier otra excepción no prevista
      throw new InternalServerErrorException({
        message: 'Error al crear un estado civil: ' + error.message,
      });
    }
  }

  findAll() {
    return `This action returns all maritalStatus`;
  }

  findOneByName(Name: string) {
    return this.maritarStatusRepository.findOneBy({ Name });
  }

  update(id: number, updateMaritalStatusDto: UpdateMaritalStatusDto) {
    return `This action updates a #${id} maritalStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} maritalStatus`;
  }
}

import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateMaritalStatusDto } from './dto/create-marital-status.dto';
import { UpdateMaritalStatusDto } from './dto/update-marital-status.dto';
import { MaritalStatusRepository } from './repository/marital-status.repository';

@Injectable()
export class MaritalStatusService {
  constructor(
    private readonly maritarStatusRepository: MaritalStatusRepository,
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
      const existStatus = await this.maritarStatusRepository.findByCondition({
        where: { Name: createMaritalStatusDto.Name },
      });

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
    return this.maritarStatusRepository.findAll();
  }

  async findOneById(id: number) {
    return this.maritarStatusRepository.findOneById(id);
  }

  // findOneByName(Name: string) {
  //   return this.maritarStatusRepository.findOneBy();
  // }

  update(id: number, updateMaritalStatusDto: UpdateMaritalStatusDto) {
    const maritalStatusToEdit = this.maritarStatusRepository.findOneById(id);
    if (!maritalStatusToEdit) {
      throw new BadRequestException({
        error: 'No existe el usuario con número de cédula: ' + id,
      });
    }
    return this.maritarStatusRepository.save({
      ...maritalStatusToEdit,
      ...updateMaritalStatusDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} maritalStatus`;
  }
}

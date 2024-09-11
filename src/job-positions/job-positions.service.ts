import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateJobPositionDto } from './dto/create-job-position.dto';
import { UpdateJobPositionDto } from './dto/update-job-position.dto';
import { JobPositionRepository } from './repository/job-position.repository';

@Injectable()
export class JobPositionsService {
  constructor(private readonly jobPositionRepository: JobPositionRepository) {}

  async onModuleInit() {
    const defaultJobPositions: CreateJobPositionDto[] = [
      {
        Name: 'Desarrollador(a) de Software',
        Description: 'Persona que se dedica a la programación de software.',
        baseSalary: 3000.0,
        globalSalary: 3500.0,
        extrafees: 500.0,
      },
      {
        Name: 'Diseñador(a) Gráfico(a)',
        Description: 'Persona que se dedica a la creación de diseños gráficos.',
        baseSalary: 2500.0,
        globalSalary: 3000.0,
        extrafees: 500.0,
      },
      {
        Name: 'Contador(a)',
        Description: 'Persona que se dedica a la contabilidad de una empresa.',
        baseSalary: 2800.0,
        globalSalary: 3300.0,
        extrafees: 500.0,
      },
      {
        Name: 'Gerente de Recursos Humanos',
        Description: 'Persona que se encarga de la gestión de personal.',
        baseSalary: 4000.0,
        globalSalary: 4500.0,
        extrafees: 500.0,
      },
      {
        Name: 'Gerente de Ventas',
        Description: 'Persona que se encarga de la gestión de ventas.',
        baseSalary: 4200.0,
        globalSalary: 4700.0,
        extrafees: 500.0,
      },
      {
        Name: 'Gerente de Marketing',
        Description: 'Persona que se encarga de la gestión de marketing.',
        baseSalary: 4100.0,
        globalSalary: 4600.0,
        extrafees: 500.0,
      },
      {
        Name: 'Asistente Administrativo(a)',
        Description: 'Persona que se encarga de tareas administrativas.',
        baseSalary: 2200.0,
        globalSalary: 2700.0,
        extrafees: 500.0,
      },
    ];

    for (const jobPosition of defaultJobPositions) {
      try {
        await this.create(jobPosition);
      } catch (error) {
        console.error(
          `Error creating job position ${jobPosition.Name}:`,
          error.message,
        );
      }
    }
  }

  async create(createJobPositionDto: CreateJobPositionDto) {
    const existJobPosition = await this.findOneByName(
      createJobPositionDto.Name,
    );

    if (existJobPosition) {
      throw new ConflictException(
        'Ya existe un puesto de trabajo con ese nombre',
      );
    }

    const newJobPosition =
      this.jobPositionRepository.create(createJobPositionDto);
    return await this.jobPositionRepository.save(newJobPosition);
  }

  async findAll() {
    return this.jobPositionRepository.findAll();
  }

  async findOneByName(Name: string) {
    return this.jobPositionRepository.findByCondition({
      where: { Name: Name },
    });
  }
  async findOneById(id: number) {
    return this.jobPositionRepository.findOneById(id);
  }

  async update(id: number, updateJobPositionDto: UpdateJobPositionDto) {
    const jobPositionToEdit = await this.findOneById(id);

    if (!jobPositionToEdit) {
      throw new BadRequestException('No existe el puesto a editar');
    }

    return this.jobPositionRepository.save({
      ...jobPositionToEdit,
      ...updateJobPositionDto,
    });
  }

  async remove(id: number) {
    return `This action removes a #${id} jobPosition`;
  }
}

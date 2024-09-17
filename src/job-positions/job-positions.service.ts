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
        Name: 'Alcalde',
        Description: 'Máxima autoridad de la municipalidad.',
        baseSalary: 5000.0,
        globalSalary: 6000.0,
        extrafees: 1000.0,
      },
      {
        Name: 'Secretario Municipal',
        Description:
          'Asistente directo del alcalde, encargado de la gestión administrativa.',
        baseSalary: 4000.0,
        globalSalary: 5000.0,
        extrafees: 800.0,
      },
      {
        Name: 'Asistente del Secretario',
        Description: 'Apoyo al secretario municipal en tareas administrativas.',
        baseSalary: 2500.0,
        globalSalary: 3000.0,
        extrafees: 400.0,
      },
      {
        Name: 'Tesorera',
        Description: 'Responsable de la gestión financiera y contable.',
        baseSalary: 4000.0,
        globalSalary: 4800.0,
        extrafees: 700.0,
      },
      {
        Name: 'Asistente de Tesorera',
        Description: 'Apoyo en las actividades de tesorería.',
        baseSalary: 2200.0,
        globalSalary: 2800.0,
        extrafees: 300.0,
      },
      {
        Name: 'Encargado de Facturación',
        Description: 'Responsable de la facturación y cobros.',
        baseSalary: 2800.0,
        globalSalary: 3500.0,
        extrafees: 500.0,
      },
      {
        Name: 'Cobros',
        Description: 'Encargado de realizar cobros de impuestos y servicios.',
        baseSalary: 2400.0,
        globalSalary: 3000.0,
        extrafees: 400.0,
      },
      {
        Name: 'Ejecución Presupuestaria a.i.',
        Description: 'Responsable de la ejecución y control del presupuesto.',
        baseSalary: 3500.0,
        globalSalary: 4200.0,
        extrafees: 600.0,
      },
      {
        Name: 'Contadora',
        Description: 'Encargada de llevar la contabilidad de la municipalidad.',
        baseSalary: 3500.0,
        globalSalary: 4300.0,
        extrafees: 500.0,
      },
      {
        Name: 'Asistente Contable',
        Description: 'Apoyo en la gestión contable y financiera.',
        baseSalary: 2000.0,
        globalSalary: 2600.0,
        extrafees: 300.0,
      },
      {
        Name: 'Inspector General',
        Description:
          'Encargado de supervisar las actividades de la municipalidad.',
        baseSalary: 3000.0,
        globalSalary: 3700.0,
        extrafees: 500.0,
      },
      {
        Name: 'Inspector Pat',
        Description:
          'Inspector encargado de verificar el cumplimiento de normativas.',
        baseSalary: 2800.0,
        globalSalary: 3400.0,
        extrafees: 400.0,
      },
      {
        Name: 'Encargado de Archivo',
        Description: 'Responsable de la gestión y organización de archivos.',
        baseSalary: 2200.0,
        globalSalary: 2800.0,
        extrafees: 300.0,
      },
      {
        Name: 'Notificador',
        Description: 'Encargado de notificar documentos y resoluciones.',
        baseSalary: 2000.0,
        globalSalary: 2500.0,
        extrafees: 300.0,
      },
      {
        Name: 'Proveedor',
        Description: 'Encargado de suministrar materiales y servicios.',
        baseSalary: 0.0,
        globalSalary: 0.0,
        extrafees: 0.0,
      },
      {
        Name: 'Encargado de Información',
        Description:
          'Responsable de la difusión de información a la comunidad.',
        baseSalary: 2500.0,
        globalSalary: 3100.0,
        extrafees: 400.0,
      },
      {
        Name: 'Planificación de Servicios',
        Description: 'Encargado de planificar los servicios municipales.',
        baseSalary: 3000.0,
        globalSalary: 3700.0,
        extrafees: 500.0,
      },
      {
        Name: 'Encargado de Recursos Humanos',
        Description: 'Responsable de la gestión del personal municipal.',
        baseSalary: 3500.0,
        globalSalary: 4200.0,
        extrafees: 600.0,
      },
      {
        Name: 'Oficina Jurídica',
        Description: 'Encargada de los asuntos legales de la municipalidad.',
        baseSalary: 4000.0,
        globalSalary: 4800.0,
        extrafees: 700.0,
      },
      {
        Name: 'Asistente de Alcaldía',
        Description: 'Apoyo administrativo al alcalde.',
        baseSalary: 2300.0,
        globalSalary: 2900.0,
        extrafees: 400.0,
      },
      {
        Name: 'Ingeniero G.Ambiente a.i.',
        Description: 'Encargado de gestionar proyectos de medio ambiente.',
        baseSalary: 3800.0,
        globalSalary: 4600.0,
        extrafees: 600.0,
      },
      {
        Name: 'OP.MQ.',
        Description: 'Encargado de obras públicas y mantenimiento.',
        baseSalary: 3500.0,
        globalSalary: 4200.0,
        extrafees: 500.0,
      },
      {
        Name: 'Cemento',
        Description:
          'Encargado del suministro de cemento y materiales de construcción.',
        baseSalary: 0.0,
        globalSalary: 0.0,
        extrafees: 0.0,
      },
      {
        Name: 'Parque',
        Description: 'Encargado de la gestión y mantenimiento de parques.',
        baseSalary: 2500.0,
        globalSalary: 3100.0,
        extrafees: 400.0,
      },
      {
        Name: 'Administrador de Acueducto',
        Description: 'Responsable de la gestión del acueducto.',
        baseSalary: 3200.0,
        globalSalary: 4000.0,
        extrafees: 600.0,
      },
      {
        Name: 'Peón Acueducto',
        Description: 'Trabajador encargado de labores en el acueducto.',
        baseSalary: 1800.0,
        globalSalary: 2200.0,
        extrafees: 300.0,
      },
      {
        Name: 'Extras',
        Description: 'Trabajadores adicionales según necesidad.',
        baseSalary: 0.0,
        globalSalary: 0.0,
        extrafees: 0.0,
      },
      {
        Name: 'Oficina de la Mujer',
        Description:
          'Encargada de atender y promover los derechos de la mujer.',
        baseSalary: 3000.0,
        globalSalary: 3700.0,
        extrafees: 500.0,
      },
      {
        Name: 'Encargado Z.M.T.',
        Description: 'Responsable de la zona de manejo territorial.',
        baseSalary: 3200.0,
        globalSalary: 4000.0,
        extrafees: 600.0,
      },
      {
        Name: 'Inspector Z.M.T.',
        Description:
          'Inspector encargado de la supervisión en la zona de manejo territorial.',
        baseSalary: 2800.0,
        globalSalary: 3400.0,
        extrafees: 400.0,
      },
      {
        Name: 'Secretario Z.M.T.',
        Description:
          'Asistente del encargado de la zona de manejo territorial.',
        baseSalary: 2500.0,
        globalSalary: 3100.0,
        extrafees: 400.0,
      },
      {
        Name: 'Gestion Z.M.T.',
        Description:
          'Encargado de la gestión administrativa en la zona de manejo territorial.',
        baseSalary: 3000.0,
        globalSalary: 3700.0,
        extrafees: 500.0,
      },
      {
        Name: 'Ingeniero Municipal',
        Description:
          'Responsable de la planificación y ejecución de proyectos municipales.',
        baseSalary: 4000.0,
        globalSalary: 4800.0,
        extrafees: 700.0,
      },
      {
        Name: 'Servicio Especial',
        Description: 'Ofrece servicios específicos según requerimientos.',
        baseSalary: 0.0,
        globalSalary: 0.0,
        extrafees: 0.0,
      },
      {
        Name: 'Perito Evaluador',
        Description: 'Encargado de realizar evaluaciones y tasaciones.',
        baseSalary: 3000.0,
        globalSalary: 3700.0,
        extrafees: 500.0,
      },
      {
        Name: 'Asistente de Perito Valorador',
        Description: 'Apoyo en las tareas de evaluación y tasación.',
        baseSalary: 2200.0,
        globalSalary: 2800.0,
        extrafees: 300.0,
      },
      {
        Name: 'Encargado de Catastro',
        Description: 'Responsable de la gestión de catastro y tierras.',
        baseSalary: 3500.0,
        globalSalary: 4200.0,
        extrafees: 600.0,
      },
      {
        Name: 'Peón (general)',
        Description:
          'Trabajador general en distintas áreas de la municipalidad.',
        baseSalary: 1500.0,
        globalSalary: 2000.0,
        extrafees: 300.0,
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

import { CreateJobPositionDto } from '../dto/create-job-position.dto';

export const defaultJobPositionsData: CreateJobPositionDto[] = [
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

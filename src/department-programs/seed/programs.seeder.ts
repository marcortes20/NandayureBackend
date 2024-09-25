import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { DepartmentProgram } from '../entities/department-program.entity';
import { defaultDepartmentProgramData } from '../seed-data/default-data';

export default class DepartmentProgramSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    //factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 0;');
    await dataSource.query('TRUNCATE `department_program`;');
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 1;');
    const repository = dataSource.getRepository(DepartmentProgram);
    await repository.insert(defaultDepartmentProgramData);

    //const municipalityFactory = factoryManager.get(Municipality);
    // save 1 factory generated entity, to the database
    // await municipalityFactory.save();
    //await userFactory.saveMany(5);
  }
}

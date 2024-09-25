import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { defaultEmployeesData } from '../seed-data/default-data';

export default class EmployeeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    //factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 0;');
    await dataSource.query('TRUNCATE `employee`;');
    await dataSource.query('SET FOREIGN_KEY_CHECKS = 1;');
    const repository = dataSource.getRepository(Employee);
    await repository.insert(defaultEmployeesData);
  }
}

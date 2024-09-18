import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Municipality } from 'src/municipality/entities/municipality.entity';
import { defaultMunicipalityData } from '../seed-data/default-data';

export default class MunicipalitySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    //factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE `municipality`;');
    const repository = dataSource.getRepository(Municipality);

    await repository.insert([defaultMunicipalityData]);

    //const municipalityFactory = factoryManager.get(Municipality);
    // save 1 factory generated entity, to the database
    // await municipalityFactory.save();
    //await userFactory.saveMany(5);
  }
}

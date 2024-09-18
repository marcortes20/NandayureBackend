import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Municipality } from 'src/municipality/entities/municipality.entity';

export default class MunicipalitySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE `municipality`;');
    const repository = dataSource.getRepository(Municipality);

    await repository.insert([
      {
        name: 'Municipalidad de Nandayure',
        address:
          'XPWX+39R, Costado norte de la Parroquia San Isidro Labrador, Av. 1, Provincia de Guanacaste, Carmona',
        phoneNumber: '+506 2577-7081',
        gmail: 'info@nandayure.go.cr',
      },
    ]);

    //const municipalityFactory = factoryManager.get(Municipality);
    // save 1 factory generated entity, to the database
    // await municipalityFactory.save();
    //await userFactory.saveMany(5);
  }
}

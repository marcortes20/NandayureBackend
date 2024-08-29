import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Municipality } from '../entities/municipality.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { MunicipalityRepositoryInterface } from './municipality.interface';

export class MunicipalityRepository
  extends BaseAbstractRepostitory<Municipality>
  implements MunicipalityRepositoryInterface
{
  constructor(
    @InjectRepository(Municipality)
    private readonly municipalityGenericRepository: Repository<Municipality>,
  ) {
    super(municipalityGenericRepository);
  }
}

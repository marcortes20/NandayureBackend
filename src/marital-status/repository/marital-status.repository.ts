import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';

import { MaritalStatusRepositoryInterce } from './marital-status.interface';
import { MaritalStatus } from '../entities/marital-status.entity';

export class MaritalStatusRepository
  extends BaseAbstractRepostitory<MaritalStatus>
  implements MaritalStatusRepositoryInterce
{
  constructor(
    @InjectRepository(MaritalStatus)
    private readonly maritalStatusGenericRepository: Repository<MaritalStatus>,
  ) {
    super(maritalStatusGenericRepository);
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { Embargo } from '../entities/embargo.entity';
import { EmbargoRepositoryInterface } from './embargoes.interface';

export class EmbargoRepository
  extends BaseAbstractRepostitory<Embargo>
  implements EmbargoRepositoryInterface
{
  constructor(
    @InjectRepository(Embargo)
    private readonly embargoRepository: Repository<Embargo>,
  ) {
    super(embargoRepository);
  }
}

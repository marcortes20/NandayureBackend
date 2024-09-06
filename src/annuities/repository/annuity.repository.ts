import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Annuity } from '../entities/annuity.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { AnnuityRepositoryInterface } from './annuity.interface';

export class AnnuityRepository
  extends BaseAbstractRepostitory<Annuity>
  implements AnnuityRepositoryInterface
{
  constructor(
    @InjectRepository(Annuity)
    private readonly annuityGenericRepository: Repository<Annuity>,
  ) {
    super(annuityGenericRepository);
  }
}

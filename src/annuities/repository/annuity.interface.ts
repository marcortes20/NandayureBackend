import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { Annuity } from '../entities/annuity.entity';

export interface AnnuityRepositoryInterface
  extends BaseInterfaceRepository<Annuity> {}

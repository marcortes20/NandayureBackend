import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { Municipality } from '../entities/municipality.entity';

export interface MunicipalityRepositoryInterface
  extends BaseInterfaceRepository<Municipality> {}

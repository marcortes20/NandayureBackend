import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { Gender } from '../entities/gender.entity';

export interface GenderRepositoryInterface
  extends BaseInterfaceRepository<Gender> {}

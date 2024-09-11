import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';

import { Training } from '../entities/training.entity';

export interface TrainingRepositoryInterface
  extends BaseInterfaceRepository<Training> {}

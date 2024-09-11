import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { JobPosition } from '../entities/job-position.entity';

export interface JobPositionRepositoryInterface
  extends BaseInterfaceRepository<JobPosition> {}

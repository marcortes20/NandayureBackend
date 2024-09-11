import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { Overtime } from '../entities/overtime.entity';

export interface OvertimeRepositoryInterface
  extends BaseInterfaceRepository<Overtime> {}

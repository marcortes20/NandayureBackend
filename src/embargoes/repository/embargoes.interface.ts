import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { Embargo } from '../entities/embargo.entity';

export interface EmbargoRepositoryInterface
  extends BaseAbstractRepostitory<Embargo> {}

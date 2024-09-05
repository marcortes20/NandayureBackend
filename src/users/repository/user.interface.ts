import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { User } from '../entities/user.entity';

export interface UserRepositoryInterface
  extends BaseInterfaceRepository<User> {}

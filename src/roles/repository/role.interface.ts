import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { Role } from '../entities/role.entity';

export interface RoleRepositoryInterface
  extends BaseInterfaceRepository<Role> {}

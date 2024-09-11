import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { RoleRepositoryInterface } from './role.interface';

export class RoleRepository
  extends BaseAbstractRepostitory<Role>
  implements RoleRepositoryInterface
{
  constructor(
    @InjectRepository(Role)
    private readonly roleGenericRepository: Repository<Role>,
  ) {
    super(roleGenericRepository);
  }
}

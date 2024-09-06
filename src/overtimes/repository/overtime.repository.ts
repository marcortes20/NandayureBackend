import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Overtime } from '../entities/overtime.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { OvertimeRepositoryInterface } from './overtime.interface';

export class OvertimeRepository
  extends BaseAbstractRepostitory<Overtime>
  implements OvertimeRepositoryInterface
{
  constructor(
    @InjectRepository(Overtime)
    private readonly overtimeGenericRepository: Repository<Overtime>,
  ) {
    super(overtimeGenericRepository);
  }
}

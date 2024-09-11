import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobPosition } from '../entities/job-position.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { JobPositionRepositoryInterface } from './job-position.interface';

export class JobPositionRepository
  extends BaseAbstractRepostitory<JobPosition>
  implements JobPositionRepositoryInterface
{
  constructor(
    @InjectRepository(JobPosition)
    private readonly jobPositionGenericRepository: Repository<JobPosition>,
  ) {
    super(jobPositionGenericRepository);
  }
}

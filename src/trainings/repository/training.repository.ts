import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Training } from '../entities/training.entity';

import { TrainingRepositoryInterface } from './training.interface';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';

export class TrainingRepository
  extends BaseAbstractRepostitory<Training>
  implements TrainingRepositoryInterface
{
  constructor(
    @InjectRepository(Training)
    private readonly trainingRepository: Repository<Training>,
  ) {
    super(trainingRepository);
  }
}

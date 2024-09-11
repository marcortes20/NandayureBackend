import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gender } from '../entities/gender.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { GenderRepositoryInterface } from './gender.interface';

export class GenderRepository
  extends BaseAbstractRepostitory<Gender>
  implements GenderRepositoryInterface
{
  constructor(
    @InjectRepository(Gender)
    private readonly genderGenericRepository: Repository<Gender>,
  ) {
    super(genderGenericRepository);
  }
}

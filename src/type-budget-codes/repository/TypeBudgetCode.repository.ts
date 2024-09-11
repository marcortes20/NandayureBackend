import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { TypeBudgetCode } from '../entities/type-budget-code.entity';
import { TypeBudgetCodeRepositoryInterface } from './TypeBudgetCode.interface';

export class TypeBudgetCodeRepository
  extends BaseAbstractRepostitory<TypeBudgetCode>
  implements TypeBudgetCodeRepositoryInterface
{
  constructor(
    @InjectRepository(TypeBudgetCode)
    private readonly typeBudgetCodeRepository: Repository<TypeBudgetCode>,
  ) {
    super(typeBudgetCodeRepository);
  }
}

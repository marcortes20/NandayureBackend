import { PartialType } from '@nestjs/swagger';
import { CreateTypeBudgetCodeDto } from './create-type-budget-code.dto';

export class UpdateTypeBudgetCodeDto extends PartialType(
  CreateTypeBudgetCodeDto,
) {}

import { PartialType } from '@nestjs/swagger';
import { CreateBudgetCodeDto } from './create-budget-code.dto';

export class UpdateBudgetCodeDto extends PartialType(CreateBudgetCodeDto) {}

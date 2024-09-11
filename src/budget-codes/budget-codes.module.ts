import { Module } from '@nestjs/common';
import { BudgetCodesService } from './budget-codes.service';
import { BudgetCodesController } from './budget-codes.controller';

@Module({
  controllers: [BudgetCodesController],
  providers: [BudgetCodesService],
})
export class BudgetCodesModule {}

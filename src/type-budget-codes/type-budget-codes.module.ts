import { Module } from '@nestjs/common';
import { TypeBudgetCodesService } from './type-budget-codes.service';
import { TypeBudgetCodesController } from './type-budget-codes.controller';

@Module({
  controllers: [TypeBudgetCodesController],
  providers: [TypeBudgetCodesService],
})
export class TypeBudgetCodesModule {}

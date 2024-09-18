import { Module } from '@nestjs/common';
import { TypeBudgetCodesService } from './type-budget-codes.service';
import { TypeBudgetCodesController } from './type-budget-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeBudgetCode } from './entities/type-budget-code.entity';
import { TypeBudgetCodeRepository } from './repository/TypeBudgetCode.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TypeBudgetCode])],
  controllers: [TypeBudgetCodesController],
  providers: [TypeBudgetCodesService, TypeBudgetCodeRepository],
  exports: [TypeBudgetCodesService],
})
export class TypeBudgetCodesModule {}

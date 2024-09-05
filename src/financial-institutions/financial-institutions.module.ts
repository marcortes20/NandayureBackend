import { Module } from '@nestjs/common';
import { FinancialInstitutionsService } from './financial-institutions.service';
import { FinancialInstitutionsController } from './financial-institutions.controller';

@Module({
  controllers: [FinancialInstitutionsController],
  providers: [FinancialInstitutionsService],
})
export class FinancialInstitutionsModule {}

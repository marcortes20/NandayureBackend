import { Module } from '@nestjs/common';
import { TypeFinancialInstitutionsService } from './type-financial-institutions.service';
import { TypeFinancialInstitutionsController } from './type-financial-institutions.controller';

@Module({
  controllers: [TypeFinancialInstitutionsController],
  providers: [TypeFinancialInstitutionsService],
})
export class TypeFinancialInstitutionsModule {}

import { Module } from '@nestjs/common';
import { LaborCodeRegulationsService } from './labor-code-regulations.service';
import { LaborCodeRegulationsController } from './labor-code-regulations.controller';

@Module({
  controllers: [LaborCodeRegulationsController],
  providers: [LaborCodeRegulationsService],
})
export class LaborCodeRegulationsModule {}

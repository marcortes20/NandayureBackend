import { Module } from '@nestjs/common';
import { RequestVacationService } from './request-vacation.service';
import { RequestVacationController } from './request-vacation.controller';

@Module({
  controllers: [RequestVacationController],
  providers: [RequestVacationService],
})
export class RequestVacationModule {}

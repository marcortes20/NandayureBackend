import { Module } from '@nestjs/common';
import { RequestVacationService } from './request-vacation.service';
import { RequestVacationController } from './request-vacation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestVacation } from './entities/request-vacation.entity';
import { RequestVacationRepository } from './repository/Request-Vacation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RequestVacation])],
  controllers: [RequestVacationController],
  providers: [RequestVacationService, RequestVacationRepository],
  exports: [RequestVacationService],
})
export class RequestVacationModule {}

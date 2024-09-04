import { Module } from '@nestjs/common';
import { JobPositionsService } from './job-positions.service';
import { JobPositionsController } from './job-positions.controller';

@Module({
  controllers: [JobPositionsController],
  providers: [JobPositionsService],
})
export class JobPositionsModule {}

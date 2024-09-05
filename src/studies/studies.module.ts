import { Module } from '@nestjs/common';
import { StudiesService } from './studies.service';
import { StudiesController } from './studies.controller';

@Module({
  controllers: [StudiesController],
  providers: [StudiesService],
})
export class StudiesModule {}

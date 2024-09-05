import { Module } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Training } from './entities/training.entity';
import { TrainingRepository } from './repository/training.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Training])],
  controllers: [TrainingsController],
  providers: [TrainingsService, TrainingRepository],
})
export class TrainingsModule {}

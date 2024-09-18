import { Module } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { JobPositionsSeederModule } from './job-positions/job-positions.module';
import { Seeder } from './seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPosition } from 'src/job-positions/entities/job-position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobPosition]), JobPositionsSeederModule],
  providers: [Logger, Seeder],
})
export class SeederModule {}

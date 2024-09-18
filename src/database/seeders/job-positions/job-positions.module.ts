import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobPosition } from 'src/job-positions/entities/job-position.entity';
import { JobPositionsSeederService } from './job-positions..service';

@Module({
  imports: [TypeOrmModule.forFeature([JobPosition])],
  providers: [JobPositionsSeederService],
  exports: [JobPositionsSeederService],
})
export class JobPositionsSeederModule {}

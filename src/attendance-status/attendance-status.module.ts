import { Module } from '@nestjs/common';
import { AttendanceStatusService } from './attendance-status.service';
import { AttendanceStatusController } from './attendance-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceStatus } from './entities/attendance-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceStatus])],
  controllers: [AttendanceStatusController],
  providers: [AttendanceStatusService],
})
export class AttendanceStatusModule {}

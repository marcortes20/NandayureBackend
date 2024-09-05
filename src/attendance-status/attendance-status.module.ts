import { Module } from '@nestjs/common';
import { AttendanceStatusService } from './attendance-status.service';
import { AttendanceStatusController } from './attendance-status.controller';

@Module({
  controllers: [AttendanceStatusController],
  providers: [AttendanceStatusService],
})
export class AttendanceStatusModule {}

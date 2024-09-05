import { Injectable } from '@nestjs/common';
import { CreateAttendanceStatusDto } from './dto/create-attendance-status.dto';
import { UpdateAttendanceStatusDto } from './dto/update-attendance-status.dto';

@Injectable()
export class AttendanceStatusService {
  create(createAttendanceStatusDto: CreateAttendanceStatusDto) {
    return 'This action adds a new attendanceStatus';
  }

  findAll() {
    return `This action returns all attendanceStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendanceStatus`;
  }

  update(id: number, updateAttendanceStatusDto: UpdateAttendanceStatusDto) {
    return `This action updates a #${id} attendanceStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceStatus`;
  }
}

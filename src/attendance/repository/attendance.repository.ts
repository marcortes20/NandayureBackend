import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from '../entities/attendance.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { AttendanceRepositoryInterface } from './attendance.interface';

export class AttendanceRepository
  extends BaseAbstractRepostitory<Attendance>
  implements AttendanceRepositoryInterface
{
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceGenericRepository: Repository<Attendance>,
  ) {
    super(attendanceGenericRepository);
  }
}

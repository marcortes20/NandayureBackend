import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceStatus } from '../entities/attendance-status.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { AttendanceStatusRepositoryInterface } from './attendance-status.interface';

export class AttendanceStatusRepository
  extends BaseAbstractRepostitory<AttendanceStatus>
  implements AttendanceStatusRepositoryInterface
{
  constructor(
    @InjectRepository(AttendanceStatus)
    private readonly attendanceStatusRepository: Repository<AttendanceStatus>,
  ) {
    super(attendanceStatusRepository);
  }
}

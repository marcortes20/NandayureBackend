import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { Attendance } from '../entities/attendance.entity';

export interface AttendanceRepositoryInterface
  extends BaseInterfaceRepository<Attendance> {}

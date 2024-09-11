import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { AttendanceStatus } from '../entities/attendance-status.entity';

export interface AttendanceStatusRepositoryInterface
  extends BaseInterfaceRepository<AttendanceStatus> {}

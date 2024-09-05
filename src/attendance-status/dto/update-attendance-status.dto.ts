import { PartialType } from '@nestjs/swagger';
import { CreateAttendanceStatusDto } from './create-attendance-status.dto';

export class UpdateAttendanceStatusDto extends PartialType(CreateAttendanceStatusDto) {}

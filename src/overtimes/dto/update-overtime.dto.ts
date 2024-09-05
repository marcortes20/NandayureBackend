import { PartialType } from '@nestjs/swagger';
import { CreateOvertimeDto } from './create-overtime.dto';

export class UpdateOvertimeDto extends PartialType(CreateOvertimeDto) {}

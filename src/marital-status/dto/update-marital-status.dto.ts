import { PartialType } from '@nestjs/swagger';
import { CreateMaritalStatusDto } from './create-marital-status.dto';

export class UpdateMaritalStatusDto extends PartialType(CreateMaritalStatusDto) {}

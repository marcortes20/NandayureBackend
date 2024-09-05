import { PartialType } from '@nestjs/swagger';
import { CreateEmbargoDto } from './create-embargo.dto';

export class UpdateEmbargoDto extends PartialType(CreateEmbargoDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAnnuityDto } from './create-annuity.dto';

export class UpdateAnnuityDto extends PartialType(CreateAnnuityDto) {}

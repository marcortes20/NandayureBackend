import { PartialType } from '@nestjs/swagger';
import { CreateFinancialInstitutionDto } from './create-financial-institution.dto';

export class UpdateFinancialInstitutionDto extends PartialType(CreateFinancialInstitutionDto) {}

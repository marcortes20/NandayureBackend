import { PartialType } from '@nestjs/swagger';
import { CreateStudiesCategoryDto } from './create-studies-category.dto';

export class UpdateStudiesCategoryDto extends PartialType(CreateStudiesCategoryDto) {}

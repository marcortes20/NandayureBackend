import { Injectable } from '@nestjs/common';
import { CreateTypeFinancialInstitutionDto } from './dto/create-type-financial-institution.dto';
import { UpdateTypeFinancialInstitutionDto } from './dto/update-type-financial-institution.dto';

@Injectable()
export class TypeFinancialInstitutionsService {
  create(createTypeFinancialInstitutionDto: CreateTypeFinancialInstitutionDto) {
    return 'This action adds a new typeFinancialInstitution';
  }

  findAll() {
    return `This action returns all typeFinancialInstitutions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeFinancialInstitution`;
  }

  update(id: number, updateTypeFinancialInstitutionDto: UpdateTypeFinancialInstitutionDto) {
    return `This action updates a #${id} typeFinancialInstitution`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeFinancialInstitution`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateFinancialInstitutionDto } from './dto/create-financial-institution.dto';
import { UpdateFinancialInstitutionDto } from './dto/update-financial-institution.dto';

@Injectable()
export class FinancialInstitutionsService {
  create(createFinancialInstitutionDto: CreateFinancialInstitutionDto) {
    return 'This action adds a new financialInstitution';
  }

  findAll() {
    return `This action returns all financialInstitutions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialInstitution`;
  }

  update(id: number, updateFinancialInstitutionDto: UpdateFinancialInstitutionDto) {
    return `This action updates a #${id} financialInstitution`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialInstitution`;
  }
}

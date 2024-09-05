import { Injectable } from '@nestjs/common';
import { CreateTypeBudgetCodeDto } from './dto/create-type-budget-code.dto';
import { UpdateTypeBudgetCodeDto } from './dto/update-type-budget-code.dto';

@Injectable()
export class TypeBudgetCodesService {
  create(createTypeBudgetCodeDto: CreateTypeBudgetCodeDto) {
    return 'This action adds a new typeBudgetCode';
  }

  findAll() {
    return `This action returns all typeBudgetCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeBudgetCode`;
  }

  update(id: number, updateTypeBudgetCodeDto: UpdateTypeBudgetCodeDto) {
    return `This action updates a #${id} typeBudgetCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeBudgetCode`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBudgetCodeDto } from './dto/create-budget-code.dto';
import { UpdateBudgetCodeDto } from './dto/update-budget-code.dto';

@Injectable()
export class BudgetCodesService {
  create(createBudgetCodeDto: CreateBudgetCodeDto) {
    return 'This action adds a new budgetCode';
  }

  findAll() {
    return `This action returns all budgetCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetCode`;
  }

  update(id: number, updateBudgetCodeDto: UpdateBudgetCodeDto) {
    return `This action updates a #${id} budgetCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetCode`;
  }
}

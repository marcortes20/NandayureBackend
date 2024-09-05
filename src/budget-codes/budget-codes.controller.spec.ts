import { Test, TestingModule } from '@nestjs/testing';
import { BudgetCodesController } from './budget-codes.controller';
import { BudgetCodesService } from './budget-codes.service';

describe('BudgetCodesController', () => {
  let controller: BudgetCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetCodesController],
      providers: [BudgetCodesService],
    }).compile();

    controller = module.get<BudgetCodesController>(BudgetCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

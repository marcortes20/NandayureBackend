import { Test, TestingModule } from '@nestjs/testing';
import { TypeBudgetCodesController } from './type-budget-codes.controller';
import { TypeBudgetCodesService } from './type-budget-codes.service';

describe('TypeBudgetCodesController', () => {
  let controller: TypeBudgetCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeBudgetCodesController],
      providers: [TypeBudgetCodesService],
    }).compile();

    controller = module.get<TypeBudgetCodesController>(
      TypeBudgetCodesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

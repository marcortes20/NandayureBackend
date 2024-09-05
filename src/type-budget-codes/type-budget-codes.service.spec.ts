import { Test, TestingModule } from '@nestjs/testing';
import { TypeBudgetCodesService } from './type-budget-codes.service';

describe('TypeBudgetCodesService', () => {
  let service: TypeBudgetCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeBudgetCodesService],
    }).compile();

    service = module.get<TypeBudgetCodesService>(TypeBudgetCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

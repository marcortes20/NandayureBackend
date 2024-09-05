import { Test, TestingModule } from '@nestjs/testing';
import { BudgetCodesService } from './budget-codes.service';

describe('BudgetCodesService', () => {
  let service: BudgetCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetCodesService],
    }).compile();

    service = module.get<BudgetCodesService>(BudgetCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

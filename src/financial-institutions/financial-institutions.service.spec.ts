import { Test, TestingModule } from '@nestjs/testing';
import { FinancialInstitutionsService } from './financial-institutions.service';

describe('FinancialInstitutionsService', () => {
  let service: FinancialInstitutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialInstitutionsService],
    }).compile();

    service = module.get<FinancialInstitutionsService>(FinancialInstitutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

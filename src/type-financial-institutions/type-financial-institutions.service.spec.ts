import { Test, TestingModule } from '@nestjs/testing';
import { TypeFinancialInstitutionsService } from './type-financial-institutions.service';

describe('TypeFinancialInstitutionsService', () => {
  let service: TypeFinancialInstitutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeFinancialInstitutionsService],
    }).compile();

    service = module.get<TypeFinancialInstitutionsService>(TypeFinancialInstitutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

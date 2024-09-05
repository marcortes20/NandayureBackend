import { Test, TestingModule } from '@nestjs/testing';
import { FinancialInstitutionsController } from './financial-institutions.controller';
import { FinancialInstitutionsService } from './financial-institutions.service';

describe('FinancialInstitutionsController', () => {
  let controller: FinancialInstitutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialInstitutionsController],
      providers: [FinancialInstitutionsService],
    }).compile();

    controller = module.get<FinancialInstitutionsController>(FinancialInstitutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

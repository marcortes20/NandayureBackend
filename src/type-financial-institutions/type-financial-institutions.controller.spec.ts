import { Test, TestingModule } from '@nestjs/testing';
import { TypeFinancialInstitutionsController } from './type-financial-institutions.controller';
import { TypeFinancialInstitutionsService } from './type-financial-institutions.service';

describe('TypeFinancialInstitutionsController', () => {
  let controller: TypeFinancialInstitutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeFinancialInstitutionsController],
      providers: [TypeFinancialInstitutionsService],
    }).compile();

    controller = module.get<TypeFinancialInstitutionsController>(TypeFinancialInstitutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

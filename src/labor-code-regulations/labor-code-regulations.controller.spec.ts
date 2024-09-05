import { Test, TestingModule } from '@nestjs/testing';
import { LaborCodeRegulationsController } from './labor-code-regulations.controller';
import { LaborCodeRegulationsService } from './labor-code-regulations.service';

describe('LaborCodeRegulationsController', () => {
  let controller: LaborCodeRegulationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaborCodeRegulationsController],
      providers: [LaborCodeRegulationsService],
    }).compile();

    controller = module.get<LaborCodeRegulationsController>(LaborCodeRegulationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

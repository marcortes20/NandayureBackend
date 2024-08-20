import { Test, TestingModule } from '@nestjs/testing';
import { MaritalStatusController } from './marital-status.controller';
import { MaritalStatusService } from './marital-status.service';

describe('MaritalStatusController', () => {
  let controller: MaritalStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaritalStatusController],
      providers: [MaritalStatusService],
    }).compile();

    controller = module.get<MaritalStatusController>(MaritalStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

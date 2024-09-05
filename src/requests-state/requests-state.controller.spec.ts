import { Test, TestingModule } from '@nestjs/testing';
import { RequestsStateController } from './requests-state.controller';
import { RequestsStateService } from './requests-state.service';

describe('RequestsStateController', () => {
  let controller: RequestsStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestsStateController],
      providers: [RequestsStateService],
    }).compile();

    controller = module.get<RequestsStateController>(RequestsStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

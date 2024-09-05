import { Test, TestingModule } from '@nestjs/testing';
import { RequestVacationController } from './request-vacation.controller';
import { RequestVacationService } from './request-vacation.service';

describe('RequestVacationController', () => {
  let controller: RequestVacationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestVacationController],
      providers: [RequestVacationService],
    }).compile();

    controller = module.get<RequestVacationController>(RequestVacationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

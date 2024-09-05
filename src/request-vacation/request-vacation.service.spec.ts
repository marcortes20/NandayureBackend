import { Test, TestingModule } from '@nestjs/testing';
import { RequestVacationService } from './request-vacation.service';

describe('RequestVacationService', () => {
  let service: RequestVacationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestVacationService],
    }).compile();

    service = module.get<RequestVacationService>(RequestVacationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

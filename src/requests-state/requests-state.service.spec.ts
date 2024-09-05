import { Test, TestingModule } from '@nestjs/testing';
import { RequestsStateService } from './requests-state.service';

describe('RequestsStateService', () => {
  let service: RequestsStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestsStateService],
    }).compile();

    service = module.get<RequestsStateService>(RequestsStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

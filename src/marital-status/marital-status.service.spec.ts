import { Test, TestingModule } from '@nestjs/testing';
import { MaritalStatusService } from './marital-status.service';

describe('MaritalStatusService', () => {
  let service: MaritalStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaritalStatusService],
    }).compile();

    service = module.get<MaritalStatusService>(MaritalStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

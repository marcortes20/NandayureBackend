import { Test, TestingModule } from '@nestjs/testing';
import { LaborCodeRegulationsService } from './labor-code-regulations.service';

describe('LaborCodeRegulationsService', () => {
  let service: LaborCodeRegulationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaborCodeRegulationsService],
    }).compile();

    service = module.get<LaborCodeRegulationsService>(LaborCodeRegulationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

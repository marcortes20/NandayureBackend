import { Test, TestingModule } from '@nestjs/testing';
import { AnnuitiesService } from './annuities.service';

describe('AnnuitiesService', () => {
  let service: AnnuitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnuitiesService],
    }).compile();

    service = module.get<AnnuitiesService>(AnnuitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

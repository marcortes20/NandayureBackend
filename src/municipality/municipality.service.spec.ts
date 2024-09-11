import { Test, TestingModule } from '@nestjs/testing';
import { MunicipalityService } from './municipality.service';

describe('MunicipalityService', () => {
  let service: MunicipalityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MunicipalityService],
    }).compile();

    service = module.get<MunicipalityService>(MunicipalityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OvertimesService } from './overtimes.service';

describe('OvertimesService', () => {
  let service: OvertimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OvertimesService],
    }).compile();

    service = module.get<OvertimesService>(OvertimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

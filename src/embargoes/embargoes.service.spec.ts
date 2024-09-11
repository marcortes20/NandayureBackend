import { Test, TestingModule } from '@nestjs/testing';
import { EmbargoesService } from './embargoes.service';

describe('EmbargoesService', () => {
  let service: EmbargoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbargoesService],
    }).compile();

    service = module.get<EmbargoesService>(EmbargoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

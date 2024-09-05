import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsService } from './trainings.service';

describe('TrainingsService', () => {
  let service: TrainingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingsService],
    }).compile();

    service = module.get<TrainingsService>(TrainingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

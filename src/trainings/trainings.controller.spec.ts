import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';

describe('TrainingsController', () => {
  let controller: TrainingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingsController],
      providers: [TrainingsService],
    }).compile();

    controller = module.get<TrainingsController>(TrainingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OvertimesController } from './overtimes.controller';
import { OvertimesService } from './overtimes.service';

describe('OvertimesController', () => {
  let controller: OvertimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OvertimesController],
      providers: [OvertimesService],
    }).compile();

    controller = module.get<OvertimesController>(OvertimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

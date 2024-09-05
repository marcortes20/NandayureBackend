import { Test, TestingModule } from '@nestjs/testing';
import { AnnuitiesController } from './annuities.controller';
import { AnnuitiesService } from './annuities.service';

describe('AnnuitiesController', () => {
  let controller: AnnuitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnuitiesController],
      providers: [AnnuitiesService],
    }).compile();

    controller = module.get<AnnuitiesController>(AnnuitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

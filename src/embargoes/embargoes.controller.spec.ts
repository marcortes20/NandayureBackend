import { Test, TestingModule } from '@nestjs/testing';
import { EmbargoesController } from './embargoes.controller';
import { EmbargoesService } from './embargoes.service';

describe('EmbargoesController', () => {
  let controller: EmbargoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbargoesController],
      providers: [EmbargoesService],
    }).compile();

    controller = module.get<EmbargoesController>(EmbargoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

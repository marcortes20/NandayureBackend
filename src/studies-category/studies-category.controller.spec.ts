import { Test, TestingModule } from '@nestjs/testing';
import { StudiesCategoryController } from './studies-category.controller';
import { StudiesCategoryService } from './studies-category.service';

describe('StudiesCategoryController', () => {
  let controller: StudiesCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudiesCategoryController],
      providers: [StudiesCategoryService],
    }).compile();

    controller = module.get<StudiesCategoryController>(StudiesCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

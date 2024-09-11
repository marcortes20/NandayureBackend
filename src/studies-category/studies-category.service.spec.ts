import { Test, TestingModule } from '@nestjs/testing';
import { StudiesCategoryService } from './studies-category.service';

describe('StudiesCategoryService', () => {
  let service: StudiesCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudiesCategoryService],
    }).compile();

    service = module.get<StudiesCategoryService>(StudiesCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

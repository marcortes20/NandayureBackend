import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentProgramsService } from './department-programs.service';

describe('DepartmentProgramsService', () => {
  let service: DepartmentProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentProgramsService],
    }).compile();

    service = module.get<DepartmentProgramsService>(DepartmentProgramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

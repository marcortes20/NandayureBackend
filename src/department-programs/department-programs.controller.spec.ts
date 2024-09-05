import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentProgramsController } from './department-programs.controller';
import { DepartmentProgramsService } from './department-programs.service';

describe('DepartmentProgramsController', () => {
  let controller: DepartmentProgramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentProgramsController],
      providers: [DepartmentProgramsService],
    }).compile();

    controller = module.get<DepartmentProgramsController>(DepartmentProgramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

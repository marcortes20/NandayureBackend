import { Module } from '@nestjs/common';
import { DepartmentProgramsService } from './department-programs.service';
import { DepartmentProgramsController } from './department-programs.controller';

@Module({
  controllers: [DepartmentProgramsController],
  providers: [DepartmentProgramsService],
})
export class DepartmentProgramsModule {}

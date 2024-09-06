import { Module } from '@nestjs/common';
import { OvertimesService } from './overtimes.service';
import { OvertimesController } from './overtimes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Overtime } from './entities/overtime.entity';
import { OvertimeRepository } from './repository/overtime.repository';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  imports: [TypeOrmModule.forFeature([Overtime]), EmployeesModule],
  controllers: [OvertimesController],
  providers: [OvertimesService, OvertimeRepository],
})
export class OvertimesModule {}

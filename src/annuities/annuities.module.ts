import { Module } from '@nestjs/common';
import { AnnuitiesService } from './annuities.service';
import { AnnuitiesController } from './annuities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Annuity } from './entities/annuity.entity';
import { EmployeesModule } from 'src/employees/employees.module';
import { AnnuityRepository } from './repository/annuity.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Annuity]), EmployeesModule],
  controllers: [AnnuitiesController],
  providers: [AnnuitiesService, AnnuityRepository],
})
export class AnnuitiesModule {}

import { Module } from '@nestjs/common';
import { MaritalStatusService } from './marital-status.service';
import { MaritalStatusController } from './marital-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaritalStatus } from './entities/marital-status.entity';
import { MaritalStatusRepository } from './repository/marital-status.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MaritalStatus])],
  controllers: [MaritalStatusController],
  providers: [MaritalStatusService, MaritalStatusRepository],
  exports: [MaritalStatusService],
})
export class MaritalStatusModule {}

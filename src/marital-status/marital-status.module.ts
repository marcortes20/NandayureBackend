import { Module } from '@nestjs/common';
import { MaritalStatusService } from './marital-status.service';
import { MaritalStatusController } from './marital-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaritalStatus } from './entities/marital-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MaritalStatus])],
  controllers: [MaritalStatusController],
  providers: [MaritalStatusService],
  exports: [MaritalStatusService],
})
export class MaritalStatusModule {}

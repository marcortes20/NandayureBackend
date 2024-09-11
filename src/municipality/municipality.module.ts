import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityController } from './municipality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipality } from './entities/municipality.entity';
import { MunicipalityRepository } from './repository/municipality.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Municipality])],
  controllers: [MunicipalityController],
  providers: [MunicipalityService, MunicipalityRepository],
})
export class MunicipalityModule {}

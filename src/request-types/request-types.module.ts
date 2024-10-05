import { Module } from '@nestjs/common';
import { RequestTypesService } from './request-types.service';
import { RequestTypesController } from './request-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestType } from './entities/request-type.entity';
import { RequestTypeRepository } from './repository/request-types.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RequestType])],
  controllers: [RequestTypesController],
  providers: [RequestTypesService, RequestTypeRepository],
  exports: [RequestTypesService],
})
export class RequestTypesModule {}

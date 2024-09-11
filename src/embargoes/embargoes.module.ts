import { Module } from '@nestjs/common';
import { EmbargoesService } from './embargoes.service';
import { EmbargoesController } from './embargoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Embargo } from './entities/embargo.entity';
import { EmbargoRepository } from './repository/embargoes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Embargo])],
  controllers: [EmbargoesController],
  providers: [EmbargoesService, EmbargoRepository],
  exports: [EmbargoesService],
})
export class EmbargoesModule {}

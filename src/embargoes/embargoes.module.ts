import { Module } from '@nestjs/common';
import { EmbargoesService } from './embargoes.service';
import { EmbargoesController } from './embargoes.controller';

@Module({
  controllers: [EmbargoesController],
  providers: [EmbargoesService],
})
export class EmbargoesModule {}

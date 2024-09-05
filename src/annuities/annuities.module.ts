import { Module } from '@nestjs/common';
import { AnnuitiesService } from './annuities.service';
import { AnnuitiesController } from './annuities.controller';

@Module({
  controllers: [AnnuitiesController],
  providers: [AnnuitiesService],
})
export class AnnuitiesModule {}

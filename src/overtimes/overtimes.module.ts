import { Module } from '@nestjs/common';
import { OvertimesService } from './overtimes.service';
import { OvertimesController } from './overtimes.controller';

@Module({
  controllers: [OvertimesController],
  providers: [OvertimesService],
})
export class OvertimesModule {}

import { Module } from '@nestjs/common';
import { RequestsStateService } from './requests-state.service';
import { RequestsStateController } from './requests-state.controller';

@Module({
  controllers: [RequestsStateController],
  providers: [RequestsStateService],
})
export class RequestsStateModule {}

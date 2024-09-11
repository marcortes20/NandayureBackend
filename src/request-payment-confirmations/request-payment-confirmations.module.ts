import { Module } from '@nestjs/common';
import { RequestPaymentConfirmationsService } from './request-payment-confirmations.service';
import { RequestPaymentConfirmationsController } from './request-payment-confirmations.controller';

@Module({
  controllers: [RequestPaymentConfirmationsController],
  providers: [RequestPaymentConfirmationsService],
})
export class RequestPaymentConfirmationsModule {}

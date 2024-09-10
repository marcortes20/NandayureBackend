import { Module } from '@nestjs/common';
import { RequestPaymentConfirmationsService } from './request-payment-confirmations.service';
import { RequestPaymentConfirmationsController } from './request-payment-confirmations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestPaymentConfirmation } from './entities/request-payment-confirmation.entity';
import { RequestPaymentConfirmationRepository } from './repository/RequestPaymentConfirmation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RequestPaymentConfirmation])],
  controllers: [RequestPaymentConfirmationsController],
  providers: [
    RequestPaymentConfirmationsService,
    RequestPaymentConfirmationRepository,
  ],
  exports: [RequestPaymentConfirmationsService],
})
export class RequestPaymentConfirmationsModule {}

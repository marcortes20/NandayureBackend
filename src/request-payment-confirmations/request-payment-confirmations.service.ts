import { Injectable } from '@nestjs/common';
import { CreateRequestPaymentConfirmationDto } from './dto/create-request-payment-confirmation.dto';
import { UpdateRequestPaymentConfirmationDto } from './dto/update-request-payment-confirmation.dto';

@Injectable()
export class RequestPaymentConfirmationsService {
  create(createRequestPaymentConfirmationDto: CreateRequestPaymentConfirmationDto) {
    return 'This action adds a new requestPaymentConfirmation';
  }

  findAll() {
    return `This action returns all requestPaymentConfirmations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestPaymentConfirmation`;
  }

  update(id: number, updateRequestPaymentConfirmationDto: UpdateRequestPaymentConfirmationDto) {
    return `This action updates a #${id} requestPaymentConfirmation`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestPaymentConfirmation`;
  }
}

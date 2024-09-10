import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestPaymentConfirmationDto } from './dto/create-request-payment-confirmation.dto';
import { UpdateRequestPaymentConfirmationDto } from './dto/update-request-payment-confirmation.dto';
import { RequestPaymentConfirmationRepository } from './repository/RequestPaymentConfirmation.repository';

@Injectable()
export class RequestPaymentConfirmationsService {
  constructor(
    private readonly paymentConfirmationRepository: RequestPaymentConfirmationRepository,
  ) {}
  async create(
    createRequestPaymentConfirmationDto: CreateRequestPaymentConfirmationDto,
  ) {
    const newPaymentRequest = this.paymentConfirmationRepository.create(
      createRequestPaymentConfirmationDto,
    );

    return await this.paymentConfirmationRepository.save(newPaymentRequest);
  }

  async findAll() {
    return await this.paymentConfirmationRepository.findAll();
  }

  async findOne(id: number) {
    return await this.paymentConfirmationRepository.findOneById(id);
  }

  async update(
    id: number,
    updateRequestPaymentConfirmationDto: UpdateRequestPaymentConfirmationDto,
  ) {
    const paymentRequestToEdit =
      await this.paymentConfirmationRepository.findOneById(id);

    if (!paymentRequestToEdit) {
      throw new NotFoundException('No se encontró la solicitud a editar');
    }

    return await this.paymentConfirmationRepository.save({
      ...paymentRequestToEdit,
      ...updateRequestPaymentConfirmationDto,
    });
  }

  async remove(id: number) {
    const paymentRequestToRemove =
      await this.paymentConfirmationRepository.findOneById(id);

    if (!paymentRequestToRemove) {
      throw new NotFoundException('No se encontró la solicitud a eliminar');
    }

    return this.paymentConfirmationRepository.remove(paymentRequestToRemove);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRequestSalaryCertificateDto } from './dto/create-request-salary-certificate.dto';
import { UpdateRequestSalaryCertificateDto } from './dto/update-request-salary-certificate.dto';
import { RequestSalaryCertificateRepository } from './repository/RequestSalaryCertificate.Interface';

@Injectable()
export class RequestSalaryCertificatesService {
  constructor(
    private readonly requestSalaryCertificateRepository: RequestSalaryCertificateRepository,
  ) {}

  async create(
    createRequestSalaryCertificateDto: CreateRequestSalaryCertificateDto,
  ) {
    const newCertificateRequest =
      this.requestSalaryCertificateRepository.create(
        createRequestSalaryCertificateDto,
      );
    return await this.requestSalaryCertificateRepository.save(
      newCertificateRequest,
    );
  }

  async findAll() {
    return await this.requestSalaryCertificateRepository.findAll();
  }

  async findOne(id: number) {
    return await this.requestSalaryCertificateRepository.findOneById(id);
  }

  async update(
    id: number,
    updateRequestSalaryCertificateDto: UpdateRequestSalaryCertificateDto,
  ) {
    const requestToEdit =
      await this.requestSalaryCertificateRepository.findOneById(id);

    if (!requestToEdit) {
      throw new NotFoundException('Solicitud no encontrada');
    }

    return await this.requestSalaryCertificateRepository.save({
      ...requestToEdit,
      ...updateRequestSalaryCertificateDto,
    });
  }

  async remove(id: number) {
    const requestToRemove =
      await this.requestSalaryCertificateRepository.findOneById(id);

    if (!requestToRemove) {
      throw new NotFoundException('Solicitud no encontrada');
    }

    return await this.requestSalaryCertificateRepository.remove(
      requestToRemove,
    );
  }
}

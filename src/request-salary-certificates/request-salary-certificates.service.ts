import { Injectable } from '@nestjs/common';
import { CreateRequestSalaryCertificateDto } from './dto/create-request-salary-certificate.dto';
import { UpdateRequestSalaryCertificateDto } from './dto/update-request-salary-certificate.dto';

@Injectable()
export class RequestSalaryCertificatesService {
  create(createRequestSalaryCertificateDto: CreateRequestSalaryCertificateDto) {
    return 'This action adds a new requestSalaryCertificate';
  }

  findAll() {
    return `This action returns all requestSalaryCertificates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestSalaryCertificate`;
  }

  update(id: number, updateRequestSalaryCertificateDto: UpdateRequestSalaryCertificateDto) {
    return `This action updates a #${id} requestSalaryCertificate`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestSalaryCertificate`;
  }
}

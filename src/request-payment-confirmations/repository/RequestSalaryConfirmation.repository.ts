import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestSalaryCertificate } from 'src/request-salary-certificates/entities/request-salary-certificate.entity';
import { BaseAbstractRepostitory } from 'src/core/generic-repository/repository/base.repository';
import { RequestPaymentConfirmationRepositoryInterface } from './RequestSalaryConfirmation.interface';

export class RequestPaymentConfirmationRepository
  extends BaseAbstractRepostitory<RequestSalaryCertificate>
  implements RequestPaymentConfirmationRepositoryInterface
{
  constructor(
    @InjectRepository(RequestSalaryCertificate)
    private readonly requestSalaryCertificateGenericRepository: Repository<RequestSalaryCertificate>,
  ) {
    super(requestSalaryCertificateGenericRepository);
  }
}

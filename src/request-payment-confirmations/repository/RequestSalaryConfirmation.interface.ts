import { BaseInterfaceRepository } from 'src/core/generic-repository/interface/base.interface';
import { RequestSalaryCertificate } from 'src/request-salary-certificates/entities/request-salary-certificate.entity';

export interface RequestPaymentConfirmationRepositoryInterface
  extends BaseInterfaceRepository<RequestSalaryCertificate> {}

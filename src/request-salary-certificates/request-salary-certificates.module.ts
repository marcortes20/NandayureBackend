import { Module } from '@nestjs/common';
import { RequestSalaryCertificatesService } from './request-salary-certificates.service';
import { RequestSalaryCertificatesController } from './request-salary-certificates.controller';

@Module({
  controllers: [RequestSalaryCertificatesController],
  providers: [RequestSalaryCertificatesService],
})
export class RequestSalaryCertificatesModule {}

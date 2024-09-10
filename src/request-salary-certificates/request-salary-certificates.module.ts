import { Module } from '@nestjs/common';
import { RequestSalaryCertificatesService } from './request-salary-certificates.service';
import { RequestSalaryCertificatesController } from './request-salary-certificates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestSalaryCertificate } from './entities/request-salary-certificate.entity';
import { RequestSalaryCertificateRepository } from './repository/RequestSalaryCertificate.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RequestSalaryCertificate])],
  controllers: [RequestSalaryCertificatesController],
  providers: [
    RequestSalaryCertificatesService,
    RequestSalaryCertificateRepository,
  ],
  exports: [RequestSalaryCertificatesService],
})
export class RequestSalaryCertificatesModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { RequestSalaryCertificatesController } from './request-salary-certificates.controller';
import { RequestSalaryCertificatesService } from './request-salary-certificates.service';

describe('RequestSalaryCertificatesController', () => {
  let controller: RequestSalaryCertificatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestSalaryCertificatesController],
      providers: [RequestSalaryCertificatesService],
    }).compile();

    controller = module.get<RequestSalaryCertificatesController>(RequestSalaryCertificatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

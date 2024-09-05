import { Test, TestingModule } from '@nestjs/testing';
import { RequestSalaryCertificatesService } from './request-salary-certificates.service';

describe('RequestSalaryCertificatesService', () => {
  let service: RequestSalaryCertificatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestSalaryCertificatesService],
    }).compile();

    service = module.get<RequestSalaryCertificatesService>(RequestSalaryCertificatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RequestPaymentConfirmationsService } from './request-payment-confirmations.service';

describe('RequestPaymentConfirmationsService', () => {
  let service: RequestPaymentConfirmationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestPaymentConfirmationsService],
    }).compile();

    service = module.get<RequestPaymentConfirmationsService>(RequestPaymentConfirmationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

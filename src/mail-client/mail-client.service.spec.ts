import { Test, TestingModule } from '@nestjs/testing';
import { MailClientService } from './mail-client.service';

describe('MailClientService', () => {
  let service: MailClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailClientService],
    }).compile();

    service = module.get<MailClientService>(MailClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

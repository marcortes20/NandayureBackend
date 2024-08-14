import { Test, TestingModule } from '@nestjs/testing';
import { MailClientController } from './mail-client.controller';
import { MailClientService } from './mail-client.service';

describe('MailClientController', () => {
  let controller: MailClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailClientController],
      providers: [MailClientService],
    }).compile();

    controller = module.get<MailClientController>(MailClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

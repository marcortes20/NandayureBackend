import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';

@Module({
  imports: [MailerModule],
  controllers: [MailerController],
  providers: [MailerService],
})
export class MailerModule {}

import { Injectable } from '@nestjs/common';
//import { CreateMailClientDto } from './dto/create-mail-client.dto';
//import { UpdateMailClientDto } from './dto/update-mail-client.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailClientDto } from './dto/create-mail-client.dto';

@Injectable()
export class MailClientService {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(createMailClientDto: CreateMailClientDto) {
    this.mailService.sendMail({
      from: 'RH-Nandayure',
      to: createMailClientDto.to,
      subject: createMailClientDto.subject,
      text: createMailClientDto.message,
      html: '<p>HTML version of the message</p>',
    });
  }
}

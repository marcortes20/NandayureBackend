import { Injectable } from '@nestjs/common';
//import { CreateMailClientDto } from './dto/create-mail-client.dto';
//import { UpdateMailClientDto } from './dto/update-mail-client.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailClientDto } from './dto/create-mail-client.dto';

@Injectable()
export class MailClientService {
  constructor(private readonly mailService: MailerService) {}

  sendMail() {
    const message = `Forgot your password? If you didn't forget your password, please ignore this email!`;

    this.mailService.sendMail({
      from: 'Kingsley Okure <kingsleyokgeorge@gmail.com>',
      to: 'joanna@gmail.com',
      subject: `How to Send Emails with Nodemailer`,
      text: message,
      html: '<p>HTML version of the message</p>',
    });
  }
}

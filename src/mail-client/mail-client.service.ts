import { Injectable } from '@nestjs/common';
//import { CreateMailClientDto } from './dto/create-mail-client.dto';
//import { UpdateMailClientDto } from './dto/update-mail-client.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailClientDto } from './dto/create-mail-client.dto';
import { RecoverPasswordMail, WelcomeMail } from './templates/mails';

@Injectable()
export class MailClientService {
  constructor(private readonly mailService: MailerService) {}

  async sendWelcomeMail(createMailClientDto: CreateMailClientDto) {
    this.mailService.sendMail({
      from: 'RH-Nandayure',
      to: createMailClientDto.to,
      subject: createMailClientDto.subject,
      text: createMailClientDto.message,
      html: await WelcomeMail(
        createMailClientDto.EmployeeId,
        createMailClientDto.Password,
        createMailClientDto.LoginURL,
      ),
      attachments: [
        {
          filename: 'MuniLogo',
          path: './src/mail-client/assets/MuniLogo.jpeg',
          cid: 'logoImage',
        },
      ],
    });
  }

  async sendRecoverPasswordMail(createMailClientDto: CreateMailClientDto) {
    this.mailService.sendMail({
      from: 'RH-Nandayure',
      to: createMailClientDto.to,
      subject: createMailClientDto.subject,
      text: createMailClientDto?.message,
      html: await RecoverPasswordMail(createMailClientDto.RecoverPasswordURL),
      attachments: [
        {
          filename: 'MuniLogo',
          path: './src/mail-client/assets/MuniLogo.jpeg',
          cid: 'logoImage',
        },
      ],
    });
  }

  async sendInformationMail(createMailClientDto: CreateMailClientDto) {
    this.mailService.sendMail({
      from: 'RH-Nandayure',
      to: createMailClientDto.to,
      subject: createMailClientDto.subject,
      text: createMailClientDto.message,
      //html: welcomeMail,
    });
  }
}

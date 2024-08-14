import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailClientService } from './mail-client.service';
import { CreateMailClientDto } from './dto/create-mail-client.dto';
import { UpdateMailClientDto } from './dto/update-mail-client.dto';

@Controller('mail-client')
export class MailClientController {
  constructor(private readonly mailClientService: MailClientService) {}

  @Post()
  create(@Body() createMailClientDto: CreateMailClientDto) {
    //return this.mailClientService.create(createMailClientDto);
  }

  @Get()
  findAll() {
    // return this.mailClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.mailClientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailClientDto: UpdateMailClientDto,
  ) {
    //return this.mailClientService.update(+id, updateMailClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return this.mailClientService.remove(+id);
  }
}

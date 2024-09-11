import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestSalaryCertificatesService } from './request-salary-certificates.service';
import { CreateRequestSalaryCertificateDto } from './dto/create-request-salary-certificate.dto';
import { UpdateRequestSalaryCertificateDto } from './dto/update-request-salary-certificate.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('request-salary-certificates')
@Controller('request-salary-certificates')
export class RequestSalaryCertificatesController {
  constructor(
    private readonly requestSalaryCertificatesService: RequestSalaryCertificatesService,
  ) {}

  @Post()
  create(
    @Body()
    createRequestSalaryCertificateDto: CreateRequestSalaryCertificateDto,
  ) {
    return this.requestSalaryCertificatesService.create(
      createRequestSalaryCertificateDto,
    );
  }

  @Get()
  findAll() {
    return this.requestSalaryCertificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestSalaryCertificatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateRequestSalaryCertificateDto: UpdateRequestSalaryCertificateDto,
  ) {
    return this.requestSalaryCertificatesService.update(
      +id,
      updateRequestSalaryCertificateDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestSalaryCertificatesService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestVacationService } from './request-vacation.service';
import { CreateRequestVacationDto } from './dto/create-request-vacation.dto';
import { UpdateRequestVacationDto } from './dto/update-request-vacation.dto';

@Controller('request-vacation')
export class RequestVacationController {
  constructor(private readonly requestVacationService: RequestVacationService) {}

  @Post()
  create(@Body() createRequestVacationDto: CreateRequestVacationDto) {
    return this.requestVacationService.create(createRequestVacationDto);
  }

  @Get()
  findAll() {
    return this.requestVacationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestVacationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestVacationDto: UpdateRequestVacationDto) {
    return this.requestVacationService.update(+id, updateRequestVacationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestVacationService.remove(+id);
  }
}

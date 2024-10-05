import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestTypesService } from './request-types.service';
import { CreateRequestTypeDto } from './dto/create-request-type.dto';
import { UpdateRequestTypeDto } from './dto/update-request-type.dto';

@Controller('request-types')
export class RequestTypesController {
  constructor(private readonly requestTypesService: RequestTypesService) {}

  @Post()
  create(@Body() createRequestTypeDto: CreateRequestTypeDto) {
    return this.requestTypesService.create(createRequestTypeDto);
  }

  @Get()
  findAll() {
    return this.requestTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestTypeDto: UpdateRequestTypeDto) {
    return this.requestTypesService.update(+id, updateRequestTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestTypesService.remove(+id);
  }
}

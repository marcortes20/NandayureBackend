import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmbargoesService } from './embargoes.service';
import { CreateEmbargoDto } from './dto/create-embargo.dto';
import { UpdateEmbargoDto } from './dto/update-embargo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('embargoes')
@Controller('embargoes')
export class EmbargoesController {
  constructor(private readonly embargoesService: EmbargoesService) {}

  @Post()
  create(@Body() createEmbargoDto: CreateEmbargoDto) {
    return this.embargoesService.create(createEmbargoDto);
  }

  @Get()
  findAll() {
    return this.embargoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.embargoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmbargoDto: UpdateEmbargoDto) {
    return this.embargoesService.update(+id, updateEmbargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.embargoesService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeBudgetCodesService } from './type-budget-codes.service';
import { CreateTypeBudgetCodeDto } from './dto/create-type-budget-code.dto';
import { UpdateTypeBudgetCodeDto } from './dto/update-type-budget-code.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('type-budget-codes')
@Controller('type-budget-codes')
export class TypeBudgetCodesController {
  constructor(
    private readonly typeBudgetCodesService: TypeBudgetCodesService,
  ) {}

  @Post()
  create(@Body() createTypeBudgetCodeDto: CreateTypeBudgetCodeDto) {
    return this.typeBudgetCodesService.create(createTypeBudgetCodeDto);
  }

  @Get()
  findAll() {
    return this.typeBudgetCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeBudgetCodesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeBudgetCodeDto: UpdateTypeBudgetCodeDto,
  ) {
    return this.typeBudgetCodesService.update(+id, updateTypeBudgetCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeBudgetCodesService.remove(+id);
  }
}

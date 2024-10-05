import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RequestApprovalsService } from './request-approvals.service';
import { CreateRequestApprovalDto } from './dto/create-request-approval.dto';
import { UpdateRequestApprovalDto } from './dto/update-request-approval.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
@ApiTags('request-approvals')
@Controller('request-approvals')
export class RequestApprovalsController {
  constructor(
    private readonly requestApprovalsService: RequestApprovalsService,
  ) {}

  // @Post()
  // create(@Body() createRequestApprovalDto: CreateRequestApprovalDto) {
  //   return this.requestApprovalsService.create(createRequestApprovalDto);
  // }

  @Get()
  findAll() {
    return this.requestApprovalsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.requestApprovalsService.findOne(+id);
  // }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req,
    @Body()
    updateRequestApprovalDto: UpdateRequestApprovalDto,
  ) {
    console.log(req.user.id);
    return this.requestApprovalsService.update(
      +id,
      updateRequestApprovalDto,
      req.user.id,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestApprovalsService.remove(+id);
  }
}

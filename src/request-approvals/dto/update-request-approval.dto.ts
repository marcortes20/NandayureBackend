import { PartialType } from '@nestjs/swagger';
import { CreateRequestApprovalDto } from './create-request-approval.dto';

export class UpdateRequestApprovalDto extends PartialType(CreateRequestApprovalDto) {}

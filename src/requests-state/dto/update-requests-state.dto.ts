import { PartialType } from '@nestjs/swagger';
import { CreateRequestsStateDto } from './create-requests-state.dto';

export class UpdateRequestsStateDto extends PartialType(CreateRequestsStateDto) {}

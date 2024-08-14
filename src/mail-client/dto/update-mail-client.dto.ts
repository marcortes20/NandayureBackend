import { PartialType } from '@nestjs/swagger';
import { CreateMailClientDto } from './create-mail-client.dto';

export class UpdateMailClientDto extends PartialType(CreateMailClientDto) {}

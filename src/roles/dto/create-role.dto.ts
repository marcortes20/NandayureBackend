import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  RoleName: string;

  // @IsArray()
  // roles: number[] = [2];
}

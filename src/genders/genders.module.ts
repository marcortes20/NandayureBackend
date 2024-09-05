import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersController } from './genders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gender } from './entities/gender.entity';
import { GenderRepository } from './repository/gender.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
  controllers: [GendersController],
  providers: [GendersService, GenderRepository],
  exports: [GendersService],
})
export class GendersModule {}

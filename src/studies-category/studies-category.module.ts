import { Module } from '@nestjs/common';
import { StudiesCategoryService } from './studies-category.service';
import { StudiesCategoryController } from './studies-category.controller';

@Module({
  controllers: [StudiesCategoryController],
  providers: [StudiesCategoryService],
})
export class StudiesCategoryModule {}

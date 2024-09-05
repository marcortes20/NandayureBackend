import { Injectable } from '@nestjs/common';
import { CreateAnnuityDto } from './dto/create-annuity.dto';
import { UpdateAnnuityDto } from './dto/update-annuity.dto';

@Injectable()
export class AnnuitiesService {
  create(createAnnuityDto: CreateAnnuityDto) {
    return 'This action adds a new annuity';
  }

  findAll() {
    return `This action returns all annuities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} annuity`;
  }

  update(id: number, updateAnnuityDto: UpdateAnnuityDto) {
    return `This action updates a #${id} annuity`;
  }

  remove(id: number) {
    return `This action removes a #${id} annuity`;
  }
}

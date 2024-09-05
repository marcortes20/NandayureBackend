import { Injectable } from '@nestjs/common';
import { CreateLaborCodeRegulationDto } from './dto/create-labor-code-regulation.dto';
import { UpdateLaborCodeRegulationDto } from './dto/update-labor-code-regulation.dto';

@Injectable()
export class LaborCodeRegulationsService {
  create(createLaborCodeRegulationDto: CreateLaborCodeRegulationDto) {
    return 'This action adds a new laborCodeRegulation';
  }

  findAll() {
    return `This action returns all laborCodeRegulations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laborCodeRegulation`;
  }

  update(id: number, updateLaborCodeRegulationDto: UpdateLaborCodeRegulationDto) {
    return `This action updates a #${id} laborCodeRegulation`;
  }

  remove(id: number) {
    return `This action removes a #${id} laborCodeRegulation`;
  }
}

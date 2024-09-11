import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmbargoDto } from './dto/create-embargo.dto';
import { UpdateEmbargoDto } from './dto/update-embargo.dto';
import { EmbargoRepository } from './repository/embargoes.repository';

@Injectable()
export class EmbargoesService {
  constructor(private readonly embargoRepository: EmbargoRepository) {}
  async create(createEmbargoDto: CreateEmbargoDto) {
    const newEmbargo = this.embargoRepository.create(createEmbargoDto);

    return await this.embargoRepository.save(newEmbargo);
  }

  async findAll() {
    return await this.embargoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.embargoRepository.findOneById(id);
  }

  async update(id: number, updateEmbargoDto: UpdateEmbargoDto) {
    const embargoToEdit = await this.embargoRepository.findOneById(id);

    if (!embargoToEdit) {
      throw new NotFoundException('Registro no encontrado');
    }

    return await this.embargoRepository.save({
      ...embargoToEdit,
      ...updateEmbargoDto,
    });
  }

  async remove(id: number) {
    const embargoToRemove = await this.embargoRepository.findOneById(id);

    if (!embargoToRemove) {
      throw new NotFoundException('Registro no encontrado');
    }

    return await this.embargoRepository.remove(embargoToRemove);
  }
}

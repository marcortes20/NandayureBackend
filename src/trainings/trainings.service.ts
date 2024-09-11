import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { TrainingRepository } from './repository/training.repository';

@Injectable()
export class TrainingsService {
  constructor(private readonly trainingRepository: TrainingRepository) {}

  async create(createTrainingDto: CreateTrainingDto) {
    const newTraining = this.trainingRepository.create(createTrainingDto);
    return await this.trainingRepository.save(newTraining);
  }

  async findAll() {
    return await this.trainingRepository.findAll();
  }

  async findOne(id: number) {
    return await this.trainingRepository.findOneById(id);
  }
  async findOneByName(Name: string) {
    return await this.trainingRepository.findOne({ where: { Name } });
  }

  async update(id: number, updateTrainingDto: UpdateTrainingDto) {
    const trainingToEdit = await this.trainingRepository.findOneById(id);
    if (!trainingToEdit) {
      throw new BadRequestException('No existe la capacitación a editar:');
    }

    return await this.trainingRepository.save({
      ...trainingToEdit,
      ...updateTrainingDto,
    });
  }

  async remove(id: number) {
    return `This action removes a #${id} training`;
  }
}

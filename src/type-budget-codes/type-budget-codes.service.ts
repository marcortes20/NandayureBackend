import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeBudgetCodeDto } from './dto/create-type-budget-code.dto';
import { UpdateTypeBudgetCodeDto } from './dto/update-type-budget-code.dto';
import { TypeBudgetCodeRepository } from './repository/TypeBudgetCode.repository';

@Injectable()
export class TypeBudgetCodesService {
  constructor(
    private readonly typeBudgetCodeRepository: TypeBudgetCodeRepository,
  ) {}
  async create(createTypeBudgetCodeDto: CreateTypeBudgetCodeDto) {
    const newType = this.typeBudgetCodeRepository.create(
      createTypeBudgetCodeDto,
    );

    return await this.typeBudgetCodeRepository.save(newType);
  }

  async findAll() {
    return await this.typeBudgetCodeRepository.findAll();
  }

  async findOne(id: number) {
    return await this.typeBudgetCodeRepository.findOneById(id);
  }

  async update(id: number, updateTypeBudgetCodeDto: UpdateTypeBudgetCodeDto) {
    const typeToEdit = await this.typeBudgetCodeRepository.findOneById(id);

    if (!typeToEdit) {
      throw new NotFoundException('Registro no encontrado');
    }

    return await this.typeBudgetCodeRepository.save({
      ...typeToEdit,
      ...updateTypeBudgetCodeDto,
    });
  }

  async remove(id: number) {
    const typeToRemove = await this.typeBudgetCodeRepository.findOneById(id);

    if (!typeToRemove) {
      throw new NotFoundException('Registro no encontrado');
    }
    return await this.typeBudgetCodeRepository.remove(typeToRemove);
  }
}

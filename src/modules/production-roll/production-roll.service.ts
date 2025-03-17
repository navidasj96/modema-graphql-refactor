import { Injectable } from '@nestjs/common';
import { CreateProductionRollInput } from './dto/create-production-roll.input';
import { UpdateProductionRollInput } from './dto/update-production-roll.input';

@Injectable()
export class ProductionRollService {
  create(createProductionRollInput: CreateProductionRollInput) {
    return 'This action adds a new productionRoll';
  }

  findAll() {
    return `This action returns all productionRoll`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionRoll`;
  }

  update(id: number, updateProductionRollInput: UpdateProductionRollInput) {
    return `This action updates a #${id} productionRoll`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionRoll`;
  }
}

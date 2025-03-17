import { Injectable } from '@nestjs/common';
import { CreateProductionPadInput } from './dto/create-production-pad.input';
import { UpdateProductionPadInput } from './dto/update-production-pad.input';

@Injectable()
export class ProductionPadService {
  create(createProductionPadInput: CreateProductionPadInput) {
    return 'This action adds a new productionPad';
  }

  findAll() {
    return `This action returns all productionPad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionPad`;
  }

  update(id: number, updateProductionPadInput: UpdateProductionPadInput) {
    return `This action updates a #${id} productionPad`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionPad`;
  }
}

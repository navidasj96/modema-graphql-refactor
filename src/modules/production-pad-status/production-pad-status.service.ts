import { Injectable } from '@nestjs/common';
import { CreateProductionPadStatusInput } from './dto/create-production-pad-status.input';
import { UpdateProductionPadStatusInput } from './dto/update-production-pad-status.input';

@Injectable()
export class ProductionPadStatusService {
  create(createProductionPadStatusInput: CreateProductionPadStatusInput) {
    return 'This action adds a new productionPadStatus';
  }

  findAll() {
    return `This action returns all productionPadStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionPadStatus`;
  }

  update(
    id: number,
    updateProductionPadStatusInput: UpdateProductionPadStatusInput
  ) {
    return `This action updates a #${id} productionPadStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionPadStatus`;
  }
}

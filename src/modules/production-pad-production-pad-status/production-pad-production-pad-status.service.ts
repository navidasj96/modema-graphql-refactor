import { Injectable } from '@nestjs/common';
import { CreateProductionPadProductionPadStatusInput } from './dto/create-production-pad-production-pad-status.input';
import { UpdateProductionPadProductionPadStatusInput } from './dto/update-production-pad-production-pad-status.input';

@Injectable()
export class ProductionPadProductionPadStatusService {
  create(
    createProductionPadProductionPadStatusInput: CreateProductionPadProductionPadStatusInput
  ) {
    return 'This action adds a new productionPadProductionPadStatus';
  }

  findAll() {
    return `This action returns all productionPadProductionPadStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionPadProductionPadStatus`;
  }

  update(
    id: number,
    updateProductionPadProductionPadStatusInput: UpdateProductionPadProductionPadStatusInput
  ) {
    return `This action updates a #${id} productionPadProductionPadStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionPadProductionPadStatus`;
  }
}

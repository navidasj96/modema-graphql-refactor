import { Injectable } from '@nestjs/common';
import { CreateChaparSettlementStatusInput } from './dto/create-chapar-settlement-status.input';
import { UpdateChaparSettlementStatusInput } from './dto/update-chapar-settlement-status.input';

@Injectable()
export class ChaparSettlementStatusService {
  create(createChaparSettlementStatusInput: CreateChaparSettlementStatusInput) {
    return 'This action adds a new chaparSettlementStatus';
  }

  findAll() {
    return `This action returns all chaparSettlementStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chaparSettlementStatus`;
  }

  update(id: number, updateChaparSettlementStatusInput: UpdateChaparSettlementStatusInput) {
    return `This action updates a #${id} chaparSettlementStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} chaparSettlementStatus`;
  }
}

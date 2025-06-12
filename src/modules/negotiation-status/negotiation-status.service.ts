import { Injectable } from '@nestjs/common';
import { CreateNegotiationStatusInput } from './dto/create-negotiation-status.input';
import { UpdateNegotiationStatusInput } from './dto/update-negotiation-status.input';

@Injectable()
export class NegotiationStatusService {
  create(createNegotiationStatusInput: CreateNegotiationStatusInput) {
    return 'This action adds a new negotiationStatus';
  }

  findAll() {
    return `This action returns all negotiationStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} negotiationStatus`;
  }

  update(
    id: number,
    updateNegotiationStatusInput: UpdateNegotiationStatusInput
  ) {
    return `This action updates a #${id} negotiationStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} negotiationStatus`;
  }
}

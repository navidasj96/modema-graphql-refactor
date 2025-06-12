import { Injectable } from '@nestjs/common';
import { CreateNegotiationHistoryInput } from './dto/create-negotiation-history.input';
import { UpdateNegotiationHistoryInput } from './dto/update-negotiation-history.input';

@Injectable()
export class NegotiationHistoryService {
  create(createNegotiationHistoryInput: CreateNegotiationHistoryInput) {
    return 'This action adds a new negotiationHistory';
  }

  findAll() {
    return `This action returns all negotiationHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} negotiationHistory`;
  }

  update(
    id: number,
    updateNegotiationHistoryInput: UpdateNegotiationHistoryInput
  ) {
    return `This action updates a #${id} negotiationHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} negotiationHistory`;
  }
}

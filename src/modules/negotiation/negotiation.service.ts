import { Injectable } from '@nestjs/common';
import { CreateNegotiationInput } from './dto/create-negotiation.input';
import { UpdateNegotiationInput } from './dto/update-negotiation.input';

@Injectable()
export class NegotiationService {
  create(createNegotiationInput: CreateNegotiationInput) {
    return 'This action adds a new negotiation';
  }

  findAll() {
    return `This action returns all negotiation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} negotiation`;
  }

  update(id: number, updateNegotiationInput: UpdateNegotiationInput) {
    return `This action updates a #${id} negotiation`;
  }

  remove(id: number) {
    return `This action removes a #${id} negotiation`;
  }
}

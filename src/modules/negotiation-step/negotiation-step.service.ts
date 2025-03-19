import { Injectable } from '@nestjs/common';
import { CreateNegotiationStepInput } from './dto/create-negotiation-step.input';
import { UpdateNegotiationStepInput } from './dto/update-negotiation-step.input';

@Injectable()
export class NegotiationStepService {
  create(createNegotiationStepInput: CreateNegotiationStepInput) {
    return 'This action adds a new negotiationStep';
  }

  findAll() {
    return `This action returns all negotiationStep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} negotiationStep`;
  }

  update(id: number, updateNegotiationStepInput: UpdateNegotiationStepInput) {
    return `This action updates a #${id} negotiationStep`;
  }

  remove(id: number) {
    return `This action removes a #${id} negotiationStep`;
  }
}

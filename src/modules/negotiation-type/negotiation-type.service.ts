import { Injectable } from '@nestjs/common';
import { CreateNegotiationTypeInput } from './dto/create-negotiation-type.input';
import { UpdateNegotiationTypeInput } from './dto/update-negotiation-type.input';

@Injectable()
export class NegotiationTypeService {
  create(createNegotiationTypeInput: CreateNegotiationTypeInput) {
    return 'This action adds a new negotiationType';
  }

  findAll() {
    return `This action returns all negotiationType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} negotiationType`;
  }

  update(id: number, updateNegotiationTypeInput: UpdateNegotiationTypeInput) {
    return `This action updates a #${id} negotiationType`;
  }

  remove(id: number) {
    return `This action removes a #${id} negotiationType`;
  }
}

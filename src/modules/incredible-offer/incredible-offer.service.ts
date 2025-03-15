import { Injectable } from '@nestjs/common';
import { CreateIncredibleOfferInput } from './dto/create-incredible-offer.input';
import { UpdateIncredibleOfferInput } from './dto/update-incredible-offer.input';

@Injectable()
export class IncredibleOfferService {
  create(createIncredibleOfferInput: CreateIncredibleOfferInput) {
    return 'This action adds a new incredibleOffer';
  }

  findAll() {
    return `This action returns all incredibleOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incredibleOffer`;
  }

  update(id: number, updateIncredibleOfferInput: UpdateIncredibleOfferInput) {
    return `This action updates a #${id} incredibleOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} incredibleOffer`;
  }
}

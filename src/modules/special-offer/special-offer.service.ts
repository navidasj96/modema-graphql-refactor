import { Injectable } from '@nestjs/common';
import { CreateSpecialOfferInput } from './dto/create-special-offer.input';
import { UpdateSpecialOfferInput } from './dto/update-special-offer.input';

@Injectable()
export class SpecialOfferService {
  create(createSpecialOfferInput: CreateSpecialOfferInput) {
    return 'This action adds a new specialOffer';
  }

  findAll() {
    return `This action returns all specialOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialOffer`;
  }

  update(id: number, updateSpecialOfferInput: UpdateSpecialOfferInput) {
    return `This action updates a #${id} specialOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialOffer`;
  }
}

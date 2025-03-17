import { Injectable } from '@nestjs/common';
import { CreateWonderfulOfferInput } from './dto/create-wonderful-offer.input';
import { UpdateWonderfulOfferInput } from './dto/update-wonderful-offer.input';

@Injectable()
export class WonderfulOfferService {
  create(createWonderfulOfferInput: CreateWonderfulOfferInput) {
    return 'This action adds a new wonderfulOffer';
  }

  findAll() {
    return `This action returns all wonderfulOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wonderfulOffer`;
  }

  update(id: number, updateWonderfulOfferInput: UpdateWonderfulOfferInput) {
    return `This action updates a #${id} wonderfulOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} wonderfulOffer`;
  }
}

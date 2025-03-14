import { Injectable } from '@nestjs/common';
import { CreateCampaignFreeOfferInput } from './dto/create-campaign-free-offer.input';
import { UpdateCampaignFreeOfferInput } from './dto/update-campaign-free-offer.input';

@Injectable()
export class CampaignFreeOfferService {
  create(createCampaignFreeOfferInput: CreateCampaignFreeOfferInput) {
    return 'This action adds a new campaignFreeOffer';
  }

  findAll() {
    return `This action returns all campaignFreeOffer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignFreeOffer`;
  }

  update(id: number, updateCampaignFreeOfferInput: UpdateCampaignFreeOfferInput) {
    return `This action updates a #${id} campaignFreeOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignFreeOffer`;
  }
}

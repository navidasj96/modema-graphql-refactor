import { Injectable } from '@nestjs/common';
import { CreateCampaignFreeOfferSizeInput } from './dto/create-campaign-free-offer-size.input';
import { UpdateCampaignFreeOfferSizeInput } from './dto/update-campaign-free-offer-size.input';

@Injectable()
export class CampaignFreeOfferSizeService {
  create(createCampaignFreeOfferSizeInput: CreateCampaignFreeOfferSizeInput) {
    return 'This action adds a new campaignFreeOfferSize';
  }

  findAll() {
    return `This action returns all campaignFreeOfferSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignFreeOfferSize`;
  }

  update(id: number, updateCampaignFreeOfferSizeInput: UpdateCampaignFreeOfferSizeInput) {
    return `This action updates a #${id} campaignFreeOfferSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignFreeOfferSize`;
  }
}

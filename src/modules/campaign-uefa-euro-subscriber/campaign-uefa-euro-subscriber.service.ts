import { Injectable } from '@nestjs/common';
import { CreateCampaignUefaEuroSubscriberInput } from './dto/create-campaign-uefa-euro-subscriber.input';
import { UpdateCampaignUefaEuroSubscriberInput } from './dto/update-campaign-uefa-euro-subscriber.input';

@Injectable()
export class CampaignUefaEuroSubscriberService {
  create(createCampaignUefaEuroSubscriberInput: CreateCampaignUefaEuroSubscriberInput) {
    return 'This action adds a new campaignUefaEuroSubscriber';
  }

  findAll() {
    return `This action returns all campaignUefaEuroSubscriber`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignUefaEuroSubscriber`;
  }

  update(id: number, updateCampaignUefaEuroSubscriberInput: UpdateCampaignUefaEuroSubscriberInput) {
    return `This action updates a #${id} campaignUefaEuroSubscriber`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignUefaEuroSubscriber`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCampaignSubscriptionInput } from './dto/create-campaign-subscription.input';
import { UpdateCampaignSubscriptionInput } from './dto/update-campaign-subscription.input';

@Injectable()
export class CampaignSubscriptionService {
  create(createCampaignSubscriptionInput: CreateCampaignSubscriptionInput) {
    return 'This action adds a new campaignSubscription';
  }

  findAll() {
    return `This action returns all campaignSubscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignSubscription`;
  }

  update(id: number, updateCampaignSubscriptionInput: UpdateCampaignSubscriptionInput) {
    return `This action updates a #${id} campaignSubscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignSubscription`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCampaignUefaEuroSubscriberHistoryInput } from './dto/create-campaign-uefa-euro-subscriber-history.input';
import { UpdateCampaignUefaEuroSubscriberHistoryInput } from './dto/update-campaign-uefa-euro-subscriber-history.input';

@Injectable()
export class CampaignUefaEuroSubscriberHistoryService {
  create(
    createCampaignUefaEuroSubscriberHistoryInput: CreateCampaignUefaEuroSubscriberHistoryInput
  ) {
    return 'This action adds a new campaignUefaEuroSubscriberHistory';
  }

  findAll() {
    return `This action returns all campaignUefaEuroSubscriberHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignUefaEuroSubscriberHistory`;
  }

  update(
    id: number,
    updateCampaignUefaEuroSubscriberHistoryInput: UpdateCampaignUefaEuroSubscriberHistoryInput
  ) {
    return `This action updates a #${id} campaignUefaEuroSubscriberHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignUefaEuroSubscriberHistory`;
  }
}

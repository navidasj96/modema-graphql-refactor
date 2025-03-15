import { Injectable } from '@nestjs/common';
import { CreateCampaignGoldCoinSubInput } from './dto/create-campaign-gold-coin-sub.input';
import { UpdateCampaignGoldCoinSubInput } from './dto/update-campaign-gold-coin-sub.input';

@Injectable()
export class CampaignGoldCoinSubService {
  create(createCampaignGoldCoinSubInput: CreateCampaignGoldCoinSubInput) {
    return 'This action adds a new campaignGoldCoinSub';
  }

  findAll() {
    return `This action returns all campaignGoldCoinSub`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignGoldCoinSub`;
  }

  update(id: number, updateCampaignGoldCoinSubInput: UpdateCampaignGoldCoinSubInput) {
    return `This action updates a #${id} campaignGoldCoinSub`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignGoldCoinSub`;
  }
}

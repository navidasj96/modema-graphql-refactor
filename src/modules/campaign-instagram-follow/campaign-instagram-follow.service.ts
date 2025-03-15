import { Injectable } from '@nestjs/common';
import { CreateCampaignInstagramFollowInput } from './dto/create-campaign-instagram-follow.input';
import { UpdateCampaignInstagramFollowInput } from './dto/update-campaign-instagram-follow.input';

@Injectable()
export class CampaignInstagramFollowService {
  create(createCampaignInstagramFollowInput: CreateCampaignInstagramFollowInput) {
    return 'This action adds a new campaignInstagramFollow';
  }

  findAll() {
    return `This action returns all campaignInstagramFollow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignInstagramFollow`;
  }

  update(id: number, updateCampaignInstagramFollowInput: UpdateCampaignInstagramFollowInput) {
    return `This action updates a #${id} campaignInstagramFollow`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignInstagramFollow`;
  }
}

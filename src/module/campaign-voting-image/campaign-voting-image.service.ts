import { Injectable } from '@nestjs/common';
import { CreateCampaignVotingImageInput } from './dto/create-campaign-voting-image.input';
import { UpdateCampaignVotingImageInput } from './dto/update-campaign-voting-image.input';

@Injectable()
export class CampaignVotingImageService {
  create(createCampaignVotingImageInput: CreateCampaignVotingImageInput) {
    return 'This action adds a new campaignVotingImage';
  }

  findAll() {
    return `This action returns all campaignVotingImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignVotingImage`;
  }

  update(id: number, updateCampaignVotingImageInput: UpdateCampaignVotingImageInput) {
    return `This action updates a #${id} campaignVotingImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignVotingImage`;
  }
}

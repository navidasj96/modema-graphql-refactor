import { Injectable } from '@nestjs/common';
import { CreateCampaignVotingImageUserInput } from './dto/create-campaign-voting-image-user.input';
import { UpdateCampaignVotingImageUserInput } from './dto/update-campaign-voting-image-user.input';

@Injectable()
export class CampaignVotingImageUserService {
  create(createCampaignVotingImageUserInput: CreateCampaignVotingImageUserInput) {
    return 'This action adds a new campaignVotingImageUser';
  }

  findAll() {
    return `This action returns all campaignVotingImageUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignVotingImageUser`;
  }

  update(id: number, updateCampaignVotingImageUserInput: UpdateCampaignVotingImageUserInput) {
    return `This action updates a #${id} campaignVotingImageUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignVotingImageUser`;
  }
}

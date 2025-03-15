import { Injectable } from '@nestjs/common';
import { CreateCampaignRoomvoVoteInput } from './dto/create-campaign-roomvo-vote.input';
import { UpdateCampaignRoomvoVoteInput } from './dto/update-campaign-roomvo-vote.input';

@Injectable()
export class CampaignRoomvoVoteService {
  create(createCampaignRoomvoVoteInput: CreateCampaignRoomvoVoteInput) {
    return 'This action adds a new campaignRoomvoVote';
  }

  findAll() {
    return `This action returns all campaignRoomvoVote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignRoomvoVote`;
  }

  update(id: number, updateCampaignRoomvoVoteInput: UpdateCampaignRoomvoVoteInput) {
    return `This action updates a #${id} campaignRoomvoVote`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignRoomvoVote`;
  }
}

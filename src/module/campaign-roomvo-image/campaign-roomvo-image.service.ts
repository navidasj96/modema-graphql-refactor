import { Injectable } from '@nestjs/common';
import { CreateCampaignRoomvoImageInput } from './dto/create-campaign-roomvo-image.input';
import { UpdateCampaignRoomvoImageInput } from './dto/update-campaign-roomvo-image.input';

@Injectable()
export class CampaignRoomvoImageService {
  create(createCampaignRoomvoImageInput: CreateCampaignRoomvoImageInput) {
    return 'This action adds a new campaignRoomvoImage';
  }

  findAll() {
    return `This action returns all campaignRoomvoImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignRoomvoImage`;
  }

  update(id: number, updateCampaignRoomvoImageInput: UpdateCampaignRoomvoImageInput) {
    return `This action updates a #${id} campaignRoomvoImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignRoomvoImage`;
  }
}

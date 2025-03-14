import { Injectable } from '@nestjs/common';
import { CreateCampaignPetFormInput } from './dto/create-campaign-pet-form.input';
import { UpdateCampaignPetFormInput } from './dto/update-campaign-pet-form.input';

@Injectable()
export class CampaignPetFormService {
  create(createCampaignPetFormInput: CreateCampaignPetFormInput) {
    return 'This action adds a new campaignPetForm';
  }

  findAll() {
    return `This action returns all campaignPetForm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignPetForm`;
  }

  update(id: number, updateCampaignPetFormInput: UpdateCampaignPetFormInput) {
    return `This action updates a #${id} campaignPetForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignPetForm`;
  }
}

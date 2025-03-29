import { Resolver } from '@nestjs/graphql';
import { CampaignRoomvoImageService } from './campaign-roomvo-image.service';
import { CampaignRoomvoImage } from './domain/campaign-roomvo-image';

@Resolver(() => CampaignRoomvoImage)
export class CampaignRoomvoImageResolver {
  constructor(
    private readonly campaignRoomvoImageService: CampaignRoomvoImageService,
  ) {}
}

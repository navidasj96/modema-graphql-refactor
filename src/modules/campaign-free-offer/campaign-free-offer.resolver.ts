import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignFreeOfferService } from './campaign-free-offer.service';
import { CreateCampaignFreeOfferInput } from './dto/create-campaign-free-offer.input';
import { UpdateCampaignFreeOfferInput } from './dto/update-campaign-free-offer.input';
import { CampaignFreeOffer } from './domain/campaign-free-offer';

@Resolver(() => CampaignFreeOffer)
export class CampaignFreeOfferResolver {
  constructor(
    private readonly campaignFreeOfferService: CampaignFreeOfferService,
  ) {}

  @Mutation(() => CampaignFreeOffer)
  createCampaignFreeOffer(
    @Args('createCampaignFreeOfferInput')
    createCampaignFreeOfferInput: CreateCampaignFreeOfferInput,
  ) {
    return this.campaignFreeOfferService.create(createCampaignFreeOfferInput);
  }

  @Query(() => [CampaignFreeOffer], { name: 'campaignFreeOffer' })
  findAll() {
    return this.campaignFreeOfferService.findAll();
  }

  @Query(() => CampaignFreeOffer, { name: 'campaignFreeOffer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignFreeOfferService.findOne(id);
  }

  @Mutation(() => CampaignFreeOffer)
  updateCampaignFreeOffer(
    @Args('updateCampaignFreeOfferInput')
    updateCampaignFreeOfferInput: UpdateCampaignFreeOfferInput,
  ) {
    return this.campaignFreeOfferService.update(
      updateCampaignFreeOfferInput.id,
      updateCampaignFreeOfferInput,
    );
  }

  @Mutation(() => CampaignFreeOffer)
  removeCampaignFreeOffer(@Args('id', { type: () => Int }) id: number) {
    return this.campaignFreeOfferService.remove(id);
  }
}

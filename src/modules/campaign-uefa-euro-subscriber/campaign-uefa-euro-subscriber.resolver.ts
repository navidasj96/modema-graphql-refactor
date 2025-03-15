import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignUefaEuroSubscriberService } from './campaign-uefa-euro-subscriber.service';
import { CreateCampaignUefaEuroSubscriberInput } from './dto/create-campaign-uefa-euro-subscriber.input';
import { UpdateCampaignUefaEuroSubscriberInput } from './dto/update-campaign-uefa-euro-subscriber.input';
import { CampaignUefaEuroSubscriber } from './domain/campaign-uefa-euro-subscriber';

@Resolver(() => CampaignUefaEuroSubscriber)
export class CampaignUefaEuroSubscriberResolver {
  constructor(
    private readonly campaignUefaEuroSubscriberService: CampaignUefaEuroSubscriberService,
  ) {}

  @Mutation(() => CampaignUefaEuroSubscriber)
  createCampaignUefaEuroSubscriber(
    @Args('createCampaignUefaEuroSubscriberInput')
    createCampaignUefaEuroSubscriberInput: CreateCampaignUefaEuroSubscriberInput,
  ) {
    return this.campaignUefaEuroSubscriberService.create(
      createCampaignUefaEuroSubscriberInput,
    );
  }

  @Query(() => [CampaignUefaEuroSubscriber], {
    name: 'campaignUefaEuroSubscriber',
  })
  findAll() {
    return this.campaignUefaEuroSubscriberService.findAll();
  }

  @Query(() => CampaignUefaEuroSubscriber, {
    name: 'campaignUefaEuroSubscriber',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignUefaEuroSubscriberService.findOne(id);
  }

  @Mutation(() => CampaignUefaEuroSubscriber)
  updateCampaignUefaEuroSubscriber(
    @Args('updateCampaignUefaEuroSubscriberInput')
    updateCampaignUefaEuroSubscriberInput: UpdateCampaignUefaEuroSubscriberInput,
  ) {
    return this.campaignUefaEuroSubscriberService.update(
      updateCampaignUefaEuroSubscriberInput.id,
      updateCampaignUefaEuroSubscriberInput,
    );
  }

  @Mutation(() => CampaignUefaEuroSubscriber)
  removeCampaignUefaEuroSubscriber(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.campaignUefaEuroSubscriberService.remove(id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignUefaEuroSubscriberHistoryService } from './campaign-uefa-euro-subscriber-history.service';
import { CreateCampaignUefaEuroSubscriberHistoryInput } from './dto/create-campaign-uefa-euro-subscriber-history.input';
import { UpdateCampaignUefaEuroSubscriberHistoryInput } from './dto/update-campaign-uefa-euro-subscriber-history.input';
import { CampaignUefaEuroSubscriberHistory } from './domain/campaign-uefa-euro-subscriber-history';

@Resolver(() => CampaignUefaEuroSubscriberHistory)
export class CampaignUefaEuroSubscriberHistoryResolver {
  constructor(
    private readonly campaignUefaEuroSubscriberHistoryService: CampaignUefaEuroSubscriberHistoryService,
  ) {}

  @Mutation(() => CampaignUefaEuroSubscriberHistory)
  createCampaignUefaEuroSubscriberHistory(
    @Args('createCampaignUefaEuroSubscriberHistoryInput')
    createCampaignUefaEuroSubscriberHistoryInput: CreateCampaignUefaEuroSubscriberHistoryInput,
  ) {
    return this.campaignUefaEuroSubscriberHistoryService.create(
      createCampaignUefaEuroSubscriberHistoryInput,
    );
  }

  @Query(() => [CampaignUefaEuroSubscriberHistory], {
    name: 'campaignUefaEuroSubscriberHistory',
  })
  findAll() {
    return this.campaignUefaEuroSubscriberHistoryService.findAll();
  }

  @Query(() => CampaignUefaEuroSubscriberHistory, {
    name: 'campaignUefaEuroSubscriberHistory',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignUefaEuroSubscriberHistoryService.findOne(id);
  }

  @Mutation(() => CampaignUefaEuroSubscriberHistory)
  updateCampaignUefaEuroSubscriberHistory(
    @Args('updateCampaignUefaEuroSubscriberHistoryInput')
    updateCampaignUefaEuroSubscriberHistoryInput: UpdateCampaignUefaEuroSubscriberHistoryInput,
  ) {
    return this.campaignUefaEuroSubscriberHistoryService.update(
      updateCampaignUefaEuroSubscriberHistoryInput.id,
      updateCampaignUefaEuroSubscriberHistoryInput,
    );
  }

  @Mutation(() => CampaignUefaEuroSubscriberHistory)
  removeCampaignUefaEuroSubscriberHistory(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.campaignUefaEuroSubscriberHistoryService.remove(id);
  }
}

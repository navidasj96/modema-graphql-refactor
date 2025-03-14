import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChaparTrackingHistoryService } from './chapar-tracking-history.service';
import { CreateChaparTrackingHistoryInput } from './dto/create-chapar-tracking-history.input';
import { UpdateChaparTrackingHistoryInput } from './dto/update-chapar-tracking-history.input';
import { ChaparTrackingHistory } from './domain/chapar-tracking-history';

@Resolver(() => ChaparTrackingHistory)
export class ChaparTrackingHistoryResolver {
  constructor(
    private readonly chaparTrackingHistoryService: ChaparTrackingHistoryService,
  ) {}

  @Mutation(() => ChaparTrackingHistory)
  createChaparTrackingHistory(
    @Args('createChaparTrackingHistoryInput')
    createChaparTrackingHistoryInput: CreateChaparTrackingHistoryInput,
  ) {
    return this.chaparTrackingHistoryService.create(
      createChaparTrackingHistoryInput,
    );
  }

  @Query(() => [ChaparTrackingHistory], { name: 'chaparTrackingHistory' })
  findAll() {
    return this.chaparTrackingHistoryService.findAll();
  }

  @Query(() => ChaparTrackingHistory, { name: 'chaparTrackingHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chaparTrackingHistoryService.findOne(id);
  }

  @Mutation(() => ChaparTrackingHistory)
  updateChaparTrackingHistory(
    @Args('updateChaparTrackingHistoryInput')
    updateChaparTrackingHistoryInput: UpdateChaparTrackingHistoryInput,
  ) {
    return this.chaparTrackingHistoryService.update(
      updateChaparTrackingHistoryInput.id,
      updateChaparTrackingHistoryInput,
    );
  }

  @Mutation(() => ChaparTrackingHistory)
  removeChaparTrackingHistory(@Args('id', { type: () => Int }) id: number) {
    return this.chaparTrackingHistoryService.remove(id);
  }
}

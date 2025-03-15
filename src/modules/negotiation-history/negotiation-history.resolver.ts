import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NegotiationHistoryService } from './negotiation-history.service';
import { CreateNegotiationHistoryInput } from './dto/create-negotiation-history.input';
import { UpdateNegotiationHistoryInput } from './dto/update-negotiation-history.input';
import { NegotiationHistory } from '@/modules/negotiation-history/domain/negotiation-history';

@Resolver(() => NegotiationHistory)
export class NegotiationHistoryResolver {
  constructor(
    private readonly negotiationHistoryService: NegotiationHistoryService,
  ) {}

  @Mutation(() => NegotiationHistory)
  createNegotiationHistory(
    @Args('createNegotiationHistoryInput')
    createNegotiationHistoryInput: CreateNegotiationHistoryInput,
  ) {
    return this.negotiationHistoryService.create(createNegotiationHistoryInput);
  }

  @Query(() => [NegotiationHistory], { name: 'negotiationHistory' })
  findAll() {
    return this.negotiationHistoryService.findAll();
  }

  @Query(() => NegotiationHistory, { name: 'negotiationHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationHistoryService.findOne(id);
  }

  @Mutation(() => NegotiationHistory)
  updateNegotiationHistory(
    @Args('updateNegotiationHistoryInput')
    updateNegotiationHistoryInput: UpdateNegotiationHistoryInput,
  ) {
    return this.negotiationHistoryService.update(
      updateNegotiationHistoryInput.id,
      updateNegotiationHistoryInput,
    );
  }

  @Mutation(() => NegotiationHistory)
  removeNegotiationHistory(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationHistoryService.remove(id);
  }
}

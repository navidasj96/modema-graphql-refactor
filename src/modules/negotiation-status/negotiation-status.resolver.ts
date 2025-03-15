import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NegotiationStatusService } from './negotiation-status.service';
import { CreateNegotiationStatusInput } from './dto/create-negotiation-status.input';
import { UpdateNegotiationStatusInput } from './dto/update-negotiation-status.input';
import { NegotiationStatus } from '@/modules/negotiation-status/domain/negotiation-status';

@Resolver(() => NegotiationStatus)
export class NegotiationStatusResolver {
  constructor(
    private readonly negotiationStatusService: NegotiationStatusService,
  ) {}

  @Mutation(() => NegotiationStatus)
  createNegotiationStatus(
    @Args('createNegotiationStatusInput')
    createNegotiationStatusInput: CreateNegotiationStatusInput,
  ) {
    return this.negotiationStatusService.create(createNegotiationStatusInput);
  }

  @Query(() => [NegotiationStatus], { name: 'negotiationStatus' })
  findAll() {
    return this.negotiationStatusService.findAll();
  }

  @Query(() => NegotiationStatus, { name: 'negotiationStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationStatusService.findOne(id);
  }

  @Mutation(() => NegotiationStatus)
  updateNegotiationStatus(
    @Args('updateNegotiationStatusInput')
    updateNegotiationStatusInput: UpdateNegotiationStatusInput,
  ) {
    return this.negotiationStatusService.update(
      updateNegotiationStatusInput.id,
      updateNegotiationStatusInput,
    );
  }

  @Mutation(() => NegotiationStatus)
  removeNegotiationStatus(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationStatusService.remove(id);
  }
}

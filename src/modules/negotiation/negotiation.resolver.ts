import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NegotiationService } from './negotiation.service';
import { CreateNegotiationInput } from './dto/create-negotiation.input';
import { UpdateNegotiationInput } from './dto/update-negotiation.input';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';

@Resolver(() => Negotiation)
export class NegotiationResolver {
  constructor(private readonly negotiationService: NegotiationService) {}

  @Mutation(() => Negotiation)
  createNegotiation(
    @Args('createNegotiationInput')
    createNegotiationInput: CreateNegotiationInput,
  ) {
    return this.negotiationService.create(createNegotiationInput);
  }

  @Query(() => [Negotiation], { name: 'negotiation' })
  findAll() {
    return this.negotiationService.findAll();
  }

  @Query(() => Negotiation, { name: 'negotiation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationService.findOne(id);
  }

  @Mutation(() => Negotiation)
  updateNegotiation(
    @Args('updateNegotiationInput')
    updateNegotiationInput: UpdateNegotiationInput,
  ) {
    return this.negotiationService.update(
      updateNegotiationInput.id,
      updateNegotiationInput,
    );
  }

  @Mutation(() => Negotiation)
  removeNegotiation(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationService.remove(id);
  }
}

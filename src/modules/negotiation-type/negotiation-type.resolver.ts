import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NegotiationTypeService } from './negotiation-type.service';
import { CreateNegotiationTypeInput } from './dto/create-negotiation-type.input';
import { UpdateNegotiationTypeInput } from './dto/update-negotiation-type.input';
import { NegotiationType } from '@/modules/negotiation-type/domain/negotiation-type';

@Resolver(() => NegotiationType)
export class NegotiationTypeResolver {
  constructor(
    private readonly negotiationTypeService: NegotiationTypeService,
  ) {}

  @Mutation(() => NegotiationType)
  createNegotiationType(
    @Args('createNegotiationTypeInput')
    createNegotiationTypeInput: CreateNegotiationTypeInput,
  ) {
    return this.negotiationTypeService.create(createNegotiationTypeInput);
  }

  @Query(() => [NegotiationType], { name: 'negotiationType' })
  findAll() {
    return this.negotiationTypeService.findAll();
  }

  @Query(() => NegotiationType, { name: 'negotiationType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationTypeService.findOne(id);
  }

  @Mutation(() => NegotiationType)
  updateNegotiationType(
    @Args('updateNegotiationTypeInput')
    updateNegotiationTypeInput: UpdateNegotiationTypeInput,
  ) {
    return this.negotiationTypeService.update(
      updateNegotiationTypeInput.id,
      updateNegotiationTypeInput,
    );
  }

  @Mutation(() => NegotiationType)
  removeNegotiationType(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationTypeService.remove(id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NegotiationStepService } from './negotiation-step.service';
import { CreateNegotiationStepInput } from './dto/create-negotiation-step.input';
import { UpdateNegotiationStepInput } from './dto/update-negotiation-step.input';
import { NegotiationStep } from '@/modules/negotiation-step/domain/negotiation-step';

@Resolver(() => NegotiationStep)
export class NegotiationStepResolver {
  constructor(
    private readonly negotiationStepService: NegotiationStepService,
  ) {}

  @Mutation(() => NegotiationStep)
  createNegotiationStep(
    @Args('createNegotiationStepInput')
    createNegotiationStepInput: CreateNegotiationStepInput,
  ) {
    return this.negotiationStepService.create(createNegotiationStepInput);
  }

  @Query(() => [NegotiationStep], { name: 'negotiationStep' })
  findAll() {
    return this.negotiationStepService.findAll();
  }

  @Query(() => NegotiationStep, { name: 'negotiationStep' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationStepService.findOne(id);
  }

  @Mutation(() => NegotiationStep)
  updateNegotiationStep(
    @Args('updateNegotiationStepInput')
    updateNegotiationStepInput: UpdateNegotiationStepInput,
  ) {
    return this.negotiationStepService.update(
      updateNegotiationStepInput.id,
      updateNegotiationStepInput,
    );
  }

  @Mutation(() => NegotiationStep)
  removeNegotiationStep(@Args('id', { type: () => Int }) id: number) {
    return this.negotiationStepService.remove(id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VisitorGroupRateService } from './visitor-group-rate.service';
import { CreateVisitorGroupRateInput } from './dto/create-visitor-group-rate.input';
import { UpdateVisitorGroupRateInput } from './dto/update-visitor-group-rate.input';
import { VisitorGroupRate } from '@/modules/visitor-group-rate/domain/visitor-group-rate';

@Resolver(() => VisitorGroupRate)
export class VisitorGroupRateResolver {
  constructor(
    private readonly visitorGroupRateService: VisitorGroupRateService,
  ) {}

  @Mutation(() => VisitorGroupRate)
  createVisitorGroupRate(
    @Args('createVisitorGroupRateInput')
    createVisitorGroupRateInput: CreateVisitorGroupRateInput,
  ) {
    return this.visitorGroupRateService.create(createVisitorGroupRateInput);
  }

  @Query(() => [VisitorGroupRate], { name: 'visitorGroupRate' })
  findAll() {
    return this.visitorGroupRateService.findAll();
  }

  @Query(() => VisitorGroupRate, { name: 'visitorGroupRate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.visitorGroupRateService.findOne(id);
  }

  @Mutation(() => VisitorGroupRate)
  updateVisitorGroupRate(
    @Args('updateVisitorGroupRateInput')
    updateVisitorGroupRateInput: UpdateVisitorGroupRateInput,
  ) {
    return this.visitorGroupRateService.update(
      updateVisitorGroupRateInput.id,
      updateVisitorGroupRateInput,
    );
  }

  @Mutation(() => VisitorGroupRate)
  removeVisitorGroupRate(@Args('id', { type: () => Int }) id: number) {
    return this.visitorGroupRateService.remove(id);
  }
}

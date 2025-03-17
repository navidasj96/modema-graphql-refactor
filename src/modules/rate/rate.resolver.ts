import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RateService } from './rate.service';
import { CreateRateInput } from './dto/create-rate.input';
import { UpdateRateInput } from './dto/update-rate.input';
import { Rate } from '@/modules/rate/domain/rate';

@Resolver(() => Rate)
export class RateResolver {
  constructor(private readonly rateService: RateService) {}

  @Mutation(() => Rate)
  createRate(@Args('createRateInput') createRateInput: CreateRateInput) {
    return this.rateService.create(createRateInput);
  }

  @Query(() => [Rate], { name: 'rate' })
  findAll() {
    return this.rateService.findAll();
  }

  @Query(() => Rate, { name: 'rate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rateService.findOne(id);
  }

  @Mutation(() => Rate)
  updateRate(@Args('updateRateInput') updateRateInput: UpdateRateInput) {
    return this.rateService.update(updateRateInput.id, updateRateInput);
  }

  @Mutation(() => Rate)
  removeRate(@Args('id', { type: () => Int }) id: number) {
    return this.rateService.remove(id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PriceGroupService } from './price-group.service';
import { CreatePriceGroupInput } from './dto/create-price-group.input';
import { UpdatePriceGroupInput } from './dto/update-price-group.input';
import { PriceGroup } from '@/modules/price-group/domain/price-group';

@Resolver(() => PriceGroup)
export class PriceGroupResolver {
  constructor(private readonly priceGroupService: PriceGroupService) {}

  @Mutation(() => PriceGroup)
  createPriceGroup(
    @Args('createPriceGroupInput') createPriceGroupInput: CreatePriceGroupInput,
  ) {
    return this.priceGroupService.create(createPriceGroupInput);
  }

  @Query(() => [PriceGroup], { name: 'priceGroup' })
  findAll() {
    return this.priceGroupService.findAll();
  }

  @Query(() => PriceGroup, { name: 'priceGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.priceGroupService.findOne(id);
  }

  @Mutation(() => PriceGroup)
  updatePriceGroup(
    @Args('updatePriceGroupInput') updatePriceGroupInput: UpdatePriceGroupInput,
  ) {
    return this.priceGroupService.update(
      updatePriceGroupInput.id,
      updatePriceGroupInput,
    );
  }

  @Mutation(() => PriceGroup)
  removePriceGroup(@Args('id', { type: () => Int }) id: number) {
    return this.priceGroupService.remove(id);
  }
}

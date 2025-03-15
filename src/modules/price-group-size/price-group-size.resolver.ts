import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PriceGroupSizeService } from './price-group-size.service';
import { CreatePriceGroupSizeInput } from './dto/create-price-group-size.input';
import { UpdatePriceGroupSizeInput } from './dto/update-price-group-size.input';
import { PriceGroupSize } from '@/modules/price-group-size/domain/price-group-size';

@Resolver(() => PriceGroupSize)
export class PriceGroupSizeResolver {
  constructor(private readonly priceGroupSizeService: PriceGroupSizeService) {}

  @Mutation(() => PriceGroupSize)
  createPriceGroupSize(
    @Args('createPriceGroupSizeInput')
    createPriceGroupSizeInput: CreatePriceGroupSizeInput,
  ) {
    return this.priceGroupSizeService.create(createPriceGroupSizeInput);
  }

  @Query(() => [PriceGroupSize], { name: 'priceGroupSize' })
  findAll() {
    return this.priceGroupSizeService.findAll();
  }

  @Query(() => PriceGroupSize, { name: 'priceGroupSize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.priceGroupSizeService.findOne(id);
  }

  @Mutation(() => PriceGroupSize)
  updatePriceGroupSize(
    @Args('updatePriceGroupSizeInput')
    updatePriceGroupSizeInput: UpdatePriceGroupSizeInput,
  ) {
    return this.priceGroupSizeService.update(
      updatePriceGroupSizeInput.id,
      updatePriceGroupSizeInput,
    );
  }

  @Mutation(() => PriceGroupSize)
  removePriceGroupSize(@Args('id', { type: () => Int }) id: number) {
    return this.priceGroupSizeService.remove(id);
  }
}

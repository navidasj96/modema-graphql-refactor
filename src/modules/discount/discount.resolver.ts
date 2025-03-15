import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DiscountService } from './discount.service';
import { CreateDiscountInput } from './dto/create-discount.input';
import { UpdateDiscountInput } from './dto/update-discount.input';
import { Discount } from './domain/discount';

@Resolver(() => Discount)
export class DiscountResolver {
  constructor(private readonly discountService: DiscountService) {}

  @Mutation(() => Discount)
  createDiscount(
    @Args('createDiscountInput') createDiscountInput: CreateDiscountInput,
  ) {
    return this.discountService.create(createDiscountInput);
  }

  @Query(() => [Discount], { name: 'discount' })
  findAll() {
    return this.discountService.findAll();
  }

  @Query(() => Discount, { name: 'discount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.discountService.findOne(id);
  }

  @Mutation(() => Discount)
  updateDiscount(
    @Args('updateDiscountInput') updateDiscountInput: UpdateDiscountInput,
  ) {
    return this.discountService.update(
      updateDiscountInput.id,
      updateDiscountInput,
    );
  }

  @Mutation(() => Discount)
  removeDiscount(@Args('id', { type: () => Int }) id: number) {
    return this.discountService.remove(id);
  }
}

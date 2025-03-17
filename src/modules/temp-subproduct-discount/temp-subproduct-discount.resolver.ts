import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TempSubproductDiscountService } from './temp-subproduct-discount.service';
import { CreateTempSubproductDiscountInput } from './dto/create-temp-subproduct-discount.input';
import { UpdateTempSubproductDiscountInput } from './dto/update-temp-subproduct-discount.input';
import { TempSubproductDiscount } from '@/modules/temp-subproduct-discount/domain/temp-subproduct-discount';

@Resolver(() => TempSubproductDiscount)
export class TempSubproductDiscountResolver {
  constructor(
    private readonly tempSubproductDiscountService: TempSubproductDiscountService,
  ) {}

  @Mutation(() => TempSubproductDiscount)
  createTempSubproductDiscount(
    @Args('createTempSubproductDiscountInput')
    createTempSubproductDiscountInput: CreateTempSubproductDiscountInput,
  ) {
    return this.tempSubproductDiscountService.create(
      createTempSubproductDiscountInput,
    );
  }

  @Query(() => [TempSubproductDiscount], { name: 'tempSubproductDiscount' })
  findAll() {
    return this.tempSubproductDiscountService.findAll();
  }

  @Query(() => TempSubproductDiscount, { name: 'tempSubproductDiscount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tempSubproductDiscountService.findOne(id);
  }

  @Mutation(() => TempSubproductDiscount)
  updateTempSubproductDiscount(
    @Args('updateTempSubproductDiscountInput')
    updateTempSubproductDiscountInput: UpdateTempSubproductDiscountInput,
  ) {
    return this.tempSubproductDiscountService.update(
      updateTempSubproductDiscountInput.id,
      updateTempSubproductDiscountInput,
    );
  }

  @Mutation(() => TempSubproductDiscount)
  removeTempSubproductDiscount(@Args('id', { type: () => Int }) id: number) {
    return this.tempSubproductDiscountService.remove(id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VisitorSaleService } from './visitor-sale.service';
import { CreateVisitorSaleInput } from './dto/create-visitor-sale.input';
import { UpdateVisitorSaleInput } from './dto/update-visitor-sale.input';
import { VisitorSale } from '@/modules/visitor-sale/domain/visitor-sale';

@Resolver(() => VisitorSale)
export class VisitorSaleResolver {
  constructor(private readonly visitorSaleService: VisitorSaleService) {}

  @Mutation(() => VisitorSale)
  createVisitorSale(
    @Args('createVisitorSaleInput')
    createVisitorSaleInput: CreateVisitorSaleInput,
  ) {
    return this.visitorSaleService.create(createVisitorSaleInput);
  }

  @Query(() => [VisitorSale], { name: 'visitorSale' })
  findAll() {
    return this.visitorSaleService.findAll();
  }

  @Query(() => VisitorSale, { name: 'visitorSale' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.visitorSaleService.findOne(id);
  }

  @Mutation(() => VisitorSale)
  updateVisitorSale(
    @Args('updateVisitorSaleInput')
    updateVisitorSaleInput: UpdateVisitorSaleInput,
  ) {
    return this.visitorSaleService.update(
      updateVisitorSaleInput.id,
      updateVisitorSaleInput,
    );
  }

  @Mutation(() => VisitorSale)
  removeVisitorSale(@Args('id', { type: () => Int }) id: number) {
    return this.visitorSaleService.remove(id);
  }
}

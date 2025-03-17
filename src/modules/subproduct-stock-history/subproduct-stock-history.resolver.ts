import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubproductStockHistoryService } from './subproduct-stock-history.service';
import { CreateSubproductStockHistoryInput } from './dto/create-subproduct-stock-history.input';
import { UpdateSubproductStockHistoryInput } from './dto/update-subproduct-stock-history.input';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history';

@Resolver(() => SubproductStockHistory)
export class SubproductStockHistoryResolver {
  constructor(
    private readonly subproductStockHistoryService: SubproductStockHistoryService,
  ) {}

  @Mutation(() => SubproductStockHistory)
  createSubproductStockHistory(
    @Args('createSubproductStockHistoryInput')
    createSubproductStockHistoryInput: CreateSubproductStockHistoryInput,
  ) {
    return this.subproductStockHistoryService.create(
      createSubproductStockHistoryInput,
    );
  }

  @Query(() => [SubproductStockHistory], { name: 'subproductStockHistory' })
  findAll() {
    return this.subproductStockHistoryService.findAll();
  }

  @Query(() => SubproductStockHistory, { name: 'subproductStockHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subproductStockHistoryService.findOne(id);
  }

  @Mutation(() => SubproductStockHistory)
  updateSubproductStockHistory(
    @Args('updateSubproductStockHistoryInput')
    updateSubproductStockHistoryInput: UpdateSubproductStockHistoryInput,
  ) {
    return this.subproductStockHistoryService.update(
      updateSubproductStockHistoryInput.id,
      updateSubproductStockHistoryInput,
    );
  }

  @Mutation(() => SubproductStockHistory)
  removeSubproductStockHistory(@Args('id', { type: () => Int }) id: number) {
    return this.subproductStockHistoryService.remove(id);
  }
}

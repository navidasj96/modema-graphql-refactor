import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestItemHistoryService } from './return-request-item-history.service';
import { CreateReturnRequestItemHistoryInput } from './dto/create-return-request-item-history.input';
import { UpdateReturnRequestItemHistoryInput } from './dto/update-return-request-item-history.input';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';

@Resolver(() => ReturnRequestItemHistory)
export class ReturnRequestItemHistoryResolver {
  constructor(
    private readonly returnRequestItemHistoryService: ReturnRequestItemHistoryService,
  ) {}

  @Mutation(() => ReturnRequestItemHistory)
  createReturnRequestItemHistory(
    @Args('createReturnRequestItemHistoryInput')
    createReturnRequestItemHistoryInput: CreateReturnRequestItemHistoryInput,
  ) {
    return this.returnRequestItemHistoryService.create(
      createReturnRequestItemHistoryInput,
    );
  }

  @Query(() => [ReturnRequestItemHistory], { name: 'returnRequestItemHistory' })
  findAll() {
    return this.returnRequestItemHistoryService.findAll();
  }

  @Query(() => ReturnRequestItemHistory, { name: 'returnRequestItemHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemHistoryService.findOne(id);
  }

  @Mutation(() => ReturnRequestItemHistory)
  updateReturnRequestItemHistory(
    @Args('updateReturnRequestItemHistoryInput')
    updateReturnRequestItemHistoryInput: UpdateReturnRequestItemHistoryInput,
  ) {
    return this.returnRequestItemHistoryService.update(
      updateReturnRequestItemHistoryInput.id,
      updateReturnRequestItemHistoryInput,
    );
  }

  @Mutation(() => ReturnRequestItemHistory)
  removeReturnRequestItemHistory(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemHistoryService.remove(id);
  }
}

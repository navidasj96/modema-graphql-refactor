import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestHistoryService } from './return-request-history.service';
import { CreateReturnRequestHistoryInput } from './dto/create-return-request-history.input';
import { UpdateReturnRequestHistoryInput } from './dto/update-return-request-history.input';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';

@Resolver(() => ReturnRequestHistory)
export class ReturnRequestHistoryResolver {
  constructor(
    private readonly returnRequestHistoryService: ReturnRequestHistoryService,
  ) {}

  @Mutation(() => ReturnRequestHistory)
  createReturnRequestHistory(
    @Args('createReturnRequestHistoryInput')
    createReturnRequestHistoryInput: CreateReturnRequestHistoryInput,
  ) {
    return this.returnRequestHistoryService.create(
      createReturnRequestHistoryInput,
    );
  }

  @Query(() => [ReturnRequestHistory], { name: 'returnRequestHistory' })
  findAll() {
    return this.returnRequestHistoryService.findAll();
  }

  @Query(() => ReturnRequestHistory, { name: 'returnRequestHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestHistoryService.findOne(id);
  }

  @Mutation(() => ReturnRequestHistory)
  updateReturnRequestHistory(
    @Args('updateReturnRequestHistoryInput')
    updateReturnRequestHistoryInput: UpdateReturnRequestHistoryInput,
  ) {
    return this.returnRequestHistoryService.update(
      updateReturnRequestHistoryInput.id,
      updateReturnRequestHistoryInput,
    );
  }

  @Mutation(() => ReturnRequestHistory)
  removeReturnRequestHistory(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestHistoryService.remove(id);
  }
}

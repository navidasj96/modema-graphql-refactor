import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnItemStatusReturnRequestItemService } from './return-item-status-return-request-item.service';
import { CreateReturnItemStatusReturnRequestItemInput } from './dto/create-return-item-status-return-request-item.input';
import { UpdateReturnItemStatusReturnRequestItemInput } from './dto/update-return-item-status-return-request-item.input';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item';

@Resolver(() => ReturnItemStatusReturnRequestItem)
export class ReturnItemStatusReturnRequestItemResolver {
  constructor(
    private readonly returnItemStatusReturnRequestItemService: ReturnItemStatusReturnRequestItemService,
  ) {}

  @Mutation(() => ReturnItemStatusReturnRequestItem)
  createReturnItemStatusReturnRequestItem(
    @Args('createReturnItemStatusReturnRequestItemInput')
    createReturnItemStatusReturnRequestItemInput: CreateReturnItemStatusReturnRequestItemInput,
  ) {
    return this.returnItemStatusReturnRequestItemService.create(
      createReturnItemStatusReturnRequestItemInput,
    );
  }

  @Query(() => [ReturnItemStatusReturnRequestItem], {
    name: 'returnItemStatusReturnRequestItem',
  })
  findAll() {
    return this.returnItemStatusReturnRequestItemService.findAll();
  }

  @Query(() => ReturnItemStatusReturnRequestItem, {
    name: 'returnItemStatusReturnRequestItem',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnItemStatusReturnRequestItemService.findOne(id);
  }

  @Mutation(() => ReturnItemStatusReturnRequestItem)
  updateReturnItemStatusReturnRequestItem(
    @Args('updateReturnItemStatusReturnRequestItemInput')
    updateReturnItemStatusReturnRequestItemInput: UpdateReturnItemStatusReturnRequestItemInput,
  ) {
    return this.returnItemStatusReturnRequestItemService.update(
      updateReturnItemStatusReturnRequestItemInput.id,
      updateReturnItemStatusReturnRequestItemInput,
    );
  }

  @Mutation(() => ReturnItemStatusReturnRequestItem)
  removeReturnItemStatusReturnRequestItem(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.returnItemStatusReturnRequestItemService.remove(id);
  }
}

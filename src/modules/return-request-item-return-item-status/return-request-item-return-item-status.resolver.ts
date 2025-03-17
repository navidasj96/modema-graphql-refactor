import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestItemReturnItemStatusService } from './return-request-item-return-item-status.service';
import { CreateReturnRequestItemReturnItemStatusInput } from './dto/create-return-request-item-return-item-status.input';
import { UpdateReturnRequestItemReturnItemStatusInput } from './dto/update-return-request-item-return-item-status.input';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status';

@Resolver(() => ReturnRequestItemReturnItemStatus)
export class ReturnRequestItemReturnItemStatusResolver {
  constructor(
    private readonly returnRequestItemReturnItemStatusService: ReturnRequestItemReturnItemStatusService,
  ) {}

  @Mutation(() => ReturnRequestItemReturnItemStatus)
  createReturnRequestItemReturnItemStatus(
    @Args('createReturnRequestItemReturnItemStatusInput')
    createReturnRequestItemReturnItemStatusInput: CreateReturnRequestItemReturnItemStatusInput,
  ) {
    return this.returnRequestItemReturnItemStatusService.create(
      createReturnRequestItemReturnItemStatusInput,
    );
  }

  @Query(() => [ReturnRequestItemReturnItemStatus], {
    name: 'returnRequestItemReturnItemStatus',
  })
  findAll() {
    return this.returnRequestItemReturnItemStatusService.findAll();
  }

  @Query(() => ReturnRequestItemReturnItemStatus, {
    name: 'returnRequestItemReturnItemStatus',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemReturnItemStatusService.findOne(id);
  }

  @Mutation(() => ReturnRequestItemReturnItemStatus)
  updateReturnRequestItemReturnItemStatus(
    @Args('updateReturnRequestItemReturnItemStatusInput')
    updateReturnRequestItemReturnItemStatusInput: UpdateReturnRequestItemReturnItemStatusInput,
  ) {
    return this.returnRequestItemReturnItemStatusService.update(
      updateReturnRequestItemReturnItemStatusInput.id,
      updateReturnRequestItemReturnItemStatusInput,
    );
  }

  @Mutation(() => ReturnRequestItemReturnItemStatus)
  removeReturnRequestItemReturnItemStatus(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.returnRequestItemReturnItemStatusService.remove(id);
  }
}

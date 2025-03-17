import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnItemStatusService } from './return-item-status.service';
import { CreateReturnItemStatusInput } from './dto/create-return-item-status.input';
import { UpdateReturnItemStatusInput } from './dto/update-return-item-status.input';
import { ReturnItemStatus } from '@/modules/return-item-status/domain/return-item-status';

@Resolver(() => ReturnItemStatus)
export class ReturnItemStatusResolver {
  constructor(
    private readonly returnItemStatusService: ReturnItemStatusService,
  ) {}

  @Mutation(() => ReturnItemStatus)
  createReturnItemStatus(
    @Args('createReturnItemStatusInput')
    createReturnItemStatusInput: CreateReturnItemStatusInput,
  ) {
    return this.returnItemStatusService.create(createReturnItemStatusInput);
  }

  @Query(() => [ReturnItemStatus], { name: 'returnItemStatus' })
  findAll() {
    return this.returnItemStatusService.findAll();
  }

  @Query(() => ReturnItemStatus, { name: 'returnItemStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnItemStatusService.findOne(id);
  }

  @Mutation(() => ReturnItemStatus)
  updateReturnItemStatus(
    @Args('updateReturnItemStatusInput')
    updateReturnItemStatusInput: UpdateReturnItemStatusInput,
  ) {
    return this.returnItemStatusService.update(
      updateReturnItemStatusInput.id,
      updateReturnItemStatusInput,
    );
  }

  @Mutation(() => ReturnItemStatus)
  removeReturnItemStatus(@Args('id', { type: () => Int }) id: number) {
    return this.returnItemStatusService.remove(id);
  }
}

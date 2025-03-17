import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestItemService } from './return-request-item.service';
import { CreateReturnRequestItemInput } from './dto/create-return-request-item.input';
import { UpdateReturnRequestItemInput } from './dto/update-return-request-item.input';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';

@Resolver(() => ReturnRequestItem)
export class ReturnRequestItemResolver {
  constructor(
    private readonly returnRequestItemService: ReturnRequestItemService,
  ) {}

  @Mutation(() => ReturnRequestItem)
  createReturnRequestItem(
    @Args('createReturnRequestItemInput')
    createReturnRequestItemInput: CreateReturnRequestItemInput,
  ) {
    return this.returnRequestItemService.create(createReturnRequestItemInput);
  }

  @Query(() => [ReturnRequestItem], { name: 'returnRequestItem' })
  findAll() {
    return this.returnRequestItemService.findAll();
  }

  @Query(() => ReturnRequestItem, { name: 'returnRequestItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemService.findOne(id);
  }

  @Mutation(() => ReturnRequestItem)
  updateReturnRequestItem(
    @Args('updateReturnRequestItemInput')
    updateReturnRequestItemInput: UpdateReturnRequestItemInput,
  ) {
    return this.returnRequestItemService.update(
      updateReturnRequestItemInput.id,
      updateReturnRequestItemInput,
    );
  }

  @Mutation(() => ReturnRequestItem)
  removeReturnRequestItem(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestItemService.remove(id);
  }
}

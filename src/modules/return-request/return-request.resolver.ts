import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestService } from './return-request.service';
import { CreateReturnRequestInput } from './dto/create-return-request.input';
import { UpdateReturnRequestInput } from './dto/update-return-request.input';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';

@Resolver(() => ReturnRequest)
export class ReturnRequestResolver {
  constructor(private readonly returnRequestService: ReturnRequestService) {}

  @Mutation(() => ReturnRequest)
  createReturnRequest(
    @Args('createReturnRequestInput')
    createReturnRequestInput: CreateReturnRequestInput,
  ) {
    return this.returnRequestService.create(createReturnRequestInput);
  }

  @Query(() => [ReturnRequest], { name: 'returnRequest' })
  findAll() {
    return this.returnRequestService.findAll();
  }

  @Query(() => ReturnRequest, { name: 'returnRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestService.findOne(id);
  }

  @Mutation(() => ReturnRequest)
  updateReturnRequest(
    @Args('updateReturnRequestInput')
    updateReturnRequestInput: UpdateReturnRequestInput,
  ) {
    return this.returnRequestService.update(
      updateReturnRequestInput.id,
      updateReturnRequestInput,
    );
  }

  @Mutation(() => ReturnRequest)
  removeReturnRequest(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestService.remove(id);
  }
}

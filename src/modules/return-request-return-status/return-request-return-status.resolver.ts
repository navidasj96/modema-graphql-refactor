import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnRequestReturnStatusService } from './return-request-return-status.service';
import { CreateReturnRequestReturnStatusInput } from './dto/create-return-request-return-status.input';
import { UpdateReturnRequestReturnStatusInput } from './dto/update-return-request-return-status.input';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/domain/return-request-return-status';

@Resolver(() => ReturnRequestReturnStatus)
export class ReturnRequestReturnStatusResolver {
  constructor(
    private readonly returnRequestReturnStatusService: ReturnRequestReturnStatusService,
  ) {}

  @Mutation(() => ReturnRequestReturnStatus)
  createReturnRequestReturnStatus(
    @Args('createReturnRequestReturnStatusInput')
    createReturnRequestReturnStatusInput: CreateReturnRequestReturnStatusInput,
  ) {
    return this.returnRequestReturnStatusService.create(
      createReturnRequestReturnStatusInput,
    );
  }

  @Query(() => [ReturnRequestReturnStatus], {
    name: 'returnRequestReturnStatus',
  })
  findAll() {
    return this.returnRequestReturnStatusService.findAll();
  }

  @Query(() => ReturnRequestReturnStatus, { name: 'returnRequestReturnStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestReturnStatusService.findOne(id);
  }

  @Mutation(() => ReturnRequestReturnStatus)
  updateReturnRequestReturnStatus(
    @Args('updateReturnRequestReturnStatusInput')
    updateReturnRequestReturnStatusInput: UpdateReturnRequestReturnStatusInput,
  ) {
    return this.returnRequestReturnStatusService.update(
      updateReturnRequestReturnStatusInput.id,
      updateReturnRequestReturnStatusInput,
    );
  }

  @Mutation(() => ReturnRequestReturnStatus)
  removeReturnRequestReturnStatus(@Args('id', { type: () => Int }) id: number) {
    return this.returnRequestReturnStatusService.remove(id);
  }
}

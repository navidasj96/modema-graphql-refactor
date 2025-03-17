import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnStatusService } from './return-status.service';
import { CreateReturnStatusInput } from './dto/create-return-status.input';
import { UpdateReturnStatusInput } from './dto/update-return-status.input';
import { ReturnStatus } from '@/modules/return-status/domain/return-status';

@Resolver(() => ReturnStatus)
export class ReturnStatusResolver {
  constructor(private readonly returnStatusService: ReturnStatusService) {}

  @Mutation(() => ReturnStatus)
  createReturnStatus(
    @Args('createReturnStatusInput')
    createReturnStatusInput: CreateReturnStatusInput,
  ) {
    return this.returnStatusService.create(createReturnStatusInput);
  }

  @Query(() => [ReturnStatus], { name: 'returnStatus' })
  findAll() {
    return this.returnStatusService.findAll();
  }

  @Query(() => ReturnStatus, { name: 'returnStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnStatusService.findOne(id);
  }

  @Mutation(() => ReturnStatus)
  updateReturnStatus(
    @Args('updateReturnStatusInput')
    updateReturnStatusInput: UpdateReturnStatusInput,
  ) {
    return this.returnStatusService.update(
      updateReturnStatusInput.id,
      updateReturnStatusInput,
    );
  }

  @Mutation(() => ReturnStatus)
  removeReturnStatus(@Args('id', { type: () => Int }) id: number) {
    return this.returnStatusService.remove(id);
  }
}

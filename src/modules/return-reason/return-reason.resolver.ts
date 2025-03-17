import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnReasonService } from './return-reason.service';
import { CreateReturnReasonInput } from './dto/create-return-reason.input';
import { UpdateReturnReasonInput } from './dto/update-return-reason.input';
import { ReturnReason } from '@/modules/return-reason/domain/return-reason';

@Resolver(() => ReturnReason)
export class ReturnReasonResolver {
  constructor(private readonly returnReasonService: ReturnReasonService) {}

  @Mutation(() => ReturnReason)
  createReturnReason(
    @Args('createReturnReasonInput')
    createReturnReasonInput: CreateReturnReasonInput,
  ) {
    return this.returnReasonService.create(createReturnReasonInput);
  }

  @Query(() => [ReturnReason], { name: 'returnReason' })
  findAll() {
    return this.returnReasonService.findAll();
  }

  @Query(() => ReturnReason, { name: 'returnReason' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnReasonService.findOne(id);
  }

  @Mutation(() => ReturnReason)
  updateReturnReason(
    @Args('updateReturnReasonInput')
    updateReturnReasonInput: UpdateReturnReasonInput,
  ) {
    return this.returnReasonService.update(
      updateReturnReasonInput.id,
      updateReturnReasonInput,
    );
  }

  @Mutation(() => ReturnReason)
  removeReturnReason(@Args('id', { type: () => Int }) id: number) {
    return this.returnReasonService.remove(id);
  }
}

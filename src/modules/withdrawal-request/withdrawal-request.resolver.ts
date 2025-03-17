import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { CreateWithdrawalRequestInput } from './dto/create-withdrawal-request.input';
import { UpdateWithdrawalRequestInput } from './dto/update-withdrawal-request.input';
import { WithdrawalRequest } from '@/modules/withdrawal-request/domain/withdrawal-request';

@Resolver(() => WithdrawalRequest)
export class WithdrawalRequestResolver {
  constructor(
    private readonly withdrawalRequestService: WithdrawalRequestService,
  ) {}

  @Mutation(() => WithdrawalRequest)
  createWithdrawalRequest(
    @Args('createWithdrawalRequestInput')
    createWithdrawalRequestInput: CreateWithdrawalRequestInput,
  ) {
    return this.withdrawalRequestService.create(createWithdrawalRequestInput);
  }

  @Query(() => [WithdrawalRequest], { name: 'withdrawalRequest' })
  findAll() {
    return this.withdrawalRequestService.findAll();
  }

  @Query(() => WithdrawalRequest, { name: 'withdrawalRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.withdrawalRequestService.findOne(id);
  }

  @Mutation(() => WithdrawalRequest)
  updateWithdrawalRequest(
    @Args('updateWithdrawalRequestInput')
    updateWithdrawalRequestInput: UpdateWithdrawalRequestInput,
  ) {
    return this.withdrawalRequestService.update(
      updateWithdrawalRequestInput.id,
      updateWithdrawalRequestInput,
    );
  }

  @Mutation(() => WithdrawalRequest)
  removeWithdrawalRequest(@Args('id', { type: () => Int }) id: number) {
    return this.withdrawalRequestService.remove(id);
  }
}

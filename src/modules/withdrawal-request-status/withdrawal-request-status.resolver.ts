import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WithdrawalRequestStatusService } from './withdrawal-request-status.service';
import { CreateWithdrawalRequestStatusInput } from './dto/create-withdrawal-request-status.input';
import { UpdateWithdrawalRequestStatusInput } from './dto/update-withdrawal-request-status.input';
import { WithdrawalRequestStatus } from '@/modules/withdrawal-request-status/domain/withdrawal-request-status';

@Resolver(() => WithdrawalRequestStatus)
export class WithdrawalRequestStatusResolver {
  constructor(
    private readonly withdrawalRequestStatusService: WithdrawalRequestStatusService,
  ) {}

  @Mutation(() => WithdrawalRequestStatus)
  createWithdrawalRequestStatus(
    @Args('createWithdrawalRequestStatusInput')
    createWithdrawalRequestStatusInput: CreateWithdrawalRequestStatusInput,
  ) {
    return this.withdrawalRequestStatusService.create(
      createWithdrawalRequestStatusInput,
    );
  }

  @Query(() => [WithdrawalRequestStatus], { name: 'withdrawalRequestStatus' })
  findAll() {
    return this.withdrawalRequestStatusService.findAll();
  }

  @Query(() => WithdrawalRequestStatus, { name: 'withdrawalRequestStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.withdrawalRequestStatusService.findOne(id);
  }

  @Mutation(() => WithdrawalRequestStatus)
  updateWithdrawalRequestStatus(
    @Args('updateWithdrawalRequestStatusInput')
    updateWithdrawalRequestStatusInput: UpdateWithdrawalRequestStatusInput,
  ) {
    return this.withdrawalRequestStatusService.update(
      updateWithdrawalRequestStatusInput.id,
      updateWithdrawalRequestStatusInput,
    );
  }

  @Mutation(() => WithdrawalRequestStatus)
  removeWithdrawalRequestStatus(@Args('id', { type: () => Int }) id: number) {
    return this.withdrawalRequestStatusService.remove(id);
  }
}

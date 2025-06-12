import { Resolver } from '@nestjs/graphql';
import { WithdrawalRequestStatusService } from './withdrawal-request-status.service';
import { WithdrawalRequestStatus } from '@/modules/withdrawal-request-status/domain/withdrawal-request-status';

@Resolver(() => WithdrawalRequestStatus)
export class WithdrawalRequestStatusResolver {
  constructor(
    private readonly withdrawalRequestStatusService: WithdrawalRequestStatusService
  ) {}
}

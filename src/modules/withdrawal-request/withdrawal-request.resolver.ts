import { Resolver } from '@nestjs/graphql';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { WithdrawalRequest } from '@/modules/withdrawal-request/domain/withdrawal-request';

@Resolver(() => WithdrawalRequest)
export class WithdrawalRequestResolver {
  constructor(
    private readonly withdrawalRequestService: WithdrawalRequestService,
  ) {}
}

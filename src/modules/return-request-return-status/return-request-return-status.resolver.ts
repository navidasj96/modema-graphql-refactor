import { Resolver } from '@nestjs/graphql';
import { ReturnRequestReturnStatusService } from './return-request-return-status.service';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/domain/return-request-return-status';

@Resolver(() => ReturnRequestReturnStatus)
export class ReturnRequestReturnStatusResolver {
  constructor(
    private readonly returnRequestReturnStatusService: ReturnRequestReturnStatusService
  ) {}
}

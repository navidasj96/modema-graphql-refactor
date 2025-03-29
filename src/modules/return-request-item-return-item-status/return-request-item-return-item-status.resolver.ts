import { Resolver } from '@nestjs/graphql';
import { ReturnRequestItemReturnItemStatusService } from './return-request-item-return-item-status.service';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status';

@Resolver(() => ReturnRequestItemReturnItemStatus)
export class ReturnRequestItemReturnItemStatusResolver {
  constructor(
    private readonly returnRequestItemReturnItemStatusService: ReturnRequestItemReturnItemStatusService,
  ) {}
}

import { Resolver } from '@nestjs/graphql';
import { ReturnItemStatusReturnRequestItemService } from './return-item-status-return-request-item.service';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item';

@Resolver(() => ReturnItemStatusReturnRequestItem)
export class ReturnItemStatusReturnRequestItemResolver {
  constructor(
    private readonly returnItemStatusReturnRequestItemService: ReturnItemStatusReturnRequestItemService,
  ) {}
}

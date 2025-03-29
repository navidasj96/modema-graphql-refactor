import { Resolver } from '@nestjs/graphql';
import { ReturnRequestItemService } from './return-request-item.service';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';

@Resolver(() => ReturnRequestItem)
export class ReturnRequestItemResolver {
  constructor(
    private readonly returnRequestItemService: ReturnRequestItemService,
  ) {}
}

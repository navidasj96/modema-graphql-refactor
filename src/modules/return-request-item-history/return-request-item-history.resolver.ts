import { Resolver } from '@nestjs/graphql';
import { ReturnRequestItemHistoryService } from './return-request-item-history.service';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';

@Resolver(() => ReturnRequestItemHistory)
export class ReturnRequestItemHistoryResolver {
  constructor(
    private readonly returnRequestItemHistoryService: ReturnRequestItemHistoryService,
  ) {}
}

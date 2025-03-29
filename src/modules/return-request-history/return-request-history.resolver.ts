import { Resolver } from '@nestjs/graphql';
import { ReturnRequestHistoryService } from './return-request-history.service';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';

@Resolver(() => ReturnRequestHistory)
export class ReturnRequestHistoryResolver {
  constructor(
    private readonly returnRequestHistoryService: ReturnRequestHistoryService,
  ) {}
}

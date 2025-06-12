import { Resolver } from '@nestjs/graphql';
import { ChaparTrackingHistoryService } from './chapar-tracking-history.service';
import { ChaparTrackingHistory } from './domain/chapar-tracking-history';

@Resolver(() => ChaparTrackingHistory)
export class ChaparTrackingHistoryResolver {
  constructor(
    private readonly chaparTrackingHistoryService: ChaparTrackingHistoryService
  ) {}
}

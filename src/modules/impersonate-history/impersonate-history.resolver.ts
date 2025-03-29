import { Resolver } from '@nestjs/graphql';
import { ImpersonateHistoryService } from './impersonate-history.service';
import { ImpersonateHistory } from '@/modules/impersonate-history/domain/impersonate-history';

@Resolver(() => ImpersonateHistory)
export class ImpersonateHistoryResolver {
  constructor(
    private readonly impersonateHistoryService: ImpersonateHistoryService,
  ) {}
}

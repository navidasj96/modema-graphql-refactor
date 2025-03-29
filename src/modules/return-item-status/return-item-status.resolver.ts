import { Resolver } from '@nestjs/graphql';
import { ReturnItemStatusService } from './return-item-status.service';
import { ReturnItemStatus } from '@/modules/return-item-status/domain/return-item-status';

@Resolver(() => ReturnItemStatus)
export class ReturnItemStatusResolver {
  constructor(
    private readonly returnItemStatusService: ReturnItemStatusService,
  ) {}
}

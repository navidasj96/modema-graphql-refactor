import { Resolver } from '@nestjs/graphql';
import { ReturnStatusService } from './return-status.service';
import { ReturnStatus } from '@/modules/return-status/domain/return-status';

@Resolver(() => ReturnStatus)
export class ReturnStatusResolver {
  constructor(private readonly returnStatusService: ReturnStatusService) {}
}

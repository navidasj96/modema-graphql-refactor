import { Resolver } from '@nestjs/graphql';
import { ReturnReasonService } from './return-reason.service';
import { ReturnReason } from '@/modules/return-reason/domain/return-reason';

@Resolver(() => ReturnReason)
export class ReturnReasonResolver {
  constructor(private readonly returnReasonService: ReturnReasonService) {}
}

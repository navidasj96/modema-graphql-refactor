import { Resolver } from '@nestjs/graphql';
import { PreorderStatusService } from './preorder-status.service';
import { PreorderStatus } from '@/modules/preorder-status/domain/preorder-status';

@Resolver(() => PreorderStatus)
export class PreorderStatusResolver {
  constructor(private readonly preorderStatusService: PreorderStatusService) {}
}

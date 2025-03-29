import { Resolver } from '@nestjs/graphql';
import { PreorderPreorderStatusService } from './preorder-preorder-status.service';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status';

@Resolver(() => PreorderPreorderStatus)
export class PreorderPreorderStatusResolver {
  constructor(
    private readonly preorderPreorderStatusService: PreorderPreorderStatusService,
  ) {}
}

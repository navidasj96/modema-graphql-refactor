import { Resolver } from '@nestjs/graphql';
import { TmpSpainOrderService } from './tmp-spain-order.service';
import { TmpSpainOrder } from '@/modules/tmp-spain-order/domain/tmp-spain-order';

@Resolver(() => TmpSpainOrder)
export class TmpSpainOrderResolver {
  constructor(private readonly tmpSpainOrderService: TmpSpainOrderService) {}
}

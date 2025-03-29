import { Resolver } from '@nestjs/graphql';
import { PriceGroupService } from './price-group.service';
import { PriceGroup } from '@/modules/price-group/domain/price-group';

@Resolver(() => PriceGroup)
export class PriceGroupResolver {
  constructor(private readonly priceGroupService: PriceGroupService) {}
}

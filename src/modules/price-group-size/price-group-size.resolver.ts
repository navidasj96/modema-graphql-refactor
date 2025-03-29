import { Resolver } from '@nestjs/graphql';
import { PriceGroupSizeService } from './price-group-size.service';
import { PriceGroupSize } from '@/modules/price-group-size/domain/price-group-size';

@Resolver(() => PriceGroupSize)
export class PriceGroupSizeResolver {
  constructor(private readonly priceGroupSizeService: PriceGroupSizeService) {}
}

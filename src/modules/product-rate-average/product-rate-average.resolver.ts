import { Resolver } from '@nestjs/graphql';
import { ProductRateAverageService } from './product-rate-average.service';
import { ProductRateAverage } from '@/modules/product-rate-average/domain/product-rate-average';

@Resolver(() => ProductRateAverage)
export class ProductRateAverageResolver {
  constructor(
    private readonly productRateAverageService: ProductRateAverageService
  ) {}
}

import { Resolver } from '@nestjs/graphql';
import { ProductRateService } from './product-rate.service';
import { ProductRate } from '@/modules/product-rate/domain/product-rate';

@Resolver(() => ProductRate)
export class ProductRateResolver {
  constructor(private readonly productRateService: ProductRateService) {}
}

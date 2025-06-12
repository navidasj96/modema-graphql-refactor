import { Resolver } from '@nestjs/graphql';
import { ProductCategoryRateService } from './product-category-rate.service';
import { ProductCategoryRate } from '@/modules/product-category-rate/domain/product-category-rate';

@Resolver(() => ProductCategoryRate)
export class ProductCategoryRateResolver {
  constructor(
    private readonly productCategoryRateService: ProductCategoryRateService
  ) {}
}

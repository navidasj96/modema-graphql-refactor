import { Resolver } from '@nestjs/graphql';
import { ProductCategoryDetailService } from './product-category-detail.service';
import { ProductCategoryDetail } from '@/modules/product-category-detail/domain/product-category-detail';

@Resolver(() => ProductCategoryDetail)
export class ProductCategoryDetailResolver {
  constructor(
    private readonly productCategoryDetailService: ProductCategoryDetailService
  ) {}
}

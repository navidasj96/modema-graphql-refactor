import { Resolver } from '@nestjs/graphql';
import { ProductProductCategoryService } from './product-product-category.service';
import { ProductProductCategory } from '@/modules/product-product-category/domain/product-product-category';

@Resolver(() => ProductProductCategory)
export class ProductProductCategoryResolver {
  constructor(
    private readonly productProductCategoryService: ProductProductCategoryService
  ) {}
}

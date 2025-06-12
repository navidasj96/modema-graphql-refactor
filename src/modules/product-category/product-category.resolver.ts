import { Resolver } from '@nestjs/graphql';
import { ProductCategoryService } from './product-category.service';
import { ProductCategory } from '@/modules/product-category/domain/product-category';

@Resolver(() => ProductCategory)
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService
  ) {}
}

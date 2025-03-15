import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';
import { ProductCategory } from '@/modules/product-category/domain/product-category';

@Resolver(() => ProductCategory)
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Mutation(() => ProductCategory)
  createProductCategory(
    @Args('createProductCategoryInput')
    createProductCategoryInput: CreateProductCategoryInput,
  ) {
    return this.productCategoryService.create(createProductCategoryInput);
  }

  @Query(() => [ProductCategory], { name: 'productCategory' })
  findAll() {
    return this.productCategoryService.findAll();
  }

  @Query(() => ProductCategory, { name: 'productCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoryService.findOne(id);
  }

  @Mutation(() => ProductCategory)
  updateProductCategory(
    @Args('updateProductCategoryInput')
    updateProductCategoryInput: UpdateProductCategoryInput,
  ) {
    return this.productCategoryService.update(
      updateProductCategoryInput.id,
      updateProductCategoryInput,
    );
  }

  @Mutation(() => ProductCategory)
  removeProductCategory(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoryService.remove(id);
  }
}

import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductProductCategoryService } from './product-product-category.service';
import { CreateProductProductCategoryInput } from './dto/create-product-product-category.input';
import { UpdateProductProductCategoryInput } from './dto/update-product-product-category.input';
import { ProductProductCategory } from '@/modules/product-product-category/domain/product-product-category';

@Resolver(() => ProductProductCategory)
export class ProductProductCategoryResolver {
  constructor(
    private readonly productProductCategoryService: ProductProductCategoryService,
  ) {}

  @Mutation(() => ProductProductCategory)
  createProductProductCategory(
    @Args('createProductProductCategoryInput')
    createProductProductCategoryInput: CreateProductProductCategoryInput,
  ) {
    return this.productProductCategoryService.create(
      createProductProductCategoryInput,
    );
  }

  @Query(() => [ProductProductCategory], { name: 'productProductCategory' })
  findAll() {
    return this.productProductCategoryService.findAll();
  }

  @Query(() => ProductProductCategory, { name: 'productProductCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productProductCategoryService.findOne(id);
  }

  @Mutation(() => ProductProductCategory)
  updateProductProductCategory(
    @Args('updateProductProductCategoryInput')
    updateProductProductCategoryInput: UpdateProductProductCategoryInput,
  ) {
    return this.productProductCategoryService.update(
      updateProductProductCategoryInput.id,
      updateProductProductCategoryInput,
    );
  }

  @Mutation(() => ProductProductCategory)
  removeProductProductCategory(@Args('id', { type: () => Int }) id: number) {
    return this.productProductCategoryService.remove(id);
  }
}

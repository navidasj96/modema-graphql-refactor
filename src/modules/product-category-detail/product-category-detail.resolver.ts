import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCategoryDetailService } from './product-category-detail.service';
import { CreateProductCategoryDetailInput } from './dto/create-product-category-detail.input';
import { UpdateProductCategoryDetailInput } from './dto/update-product-category-detail.input';
import { ProductCategoryDetail } from '@/modules/product-category-detail/domain/product-category-detail';

@Resolver(() => ProductCategoryDetail)
export class ProductCategoryDetailResolver {
  constructor(
    private readonly productCategoryDetailService: ProductCategoryDetailService,
  ) {}

  @Mutation(() => ProductCategoryDetail)
  createProductCategoryDetail(
    @Args('createProductCategoryDetailInput')
    createProductCategoryDetailInput: CreateProductCategoryDetailInput,
  ) {
    return this.productCategoryDetailService.create(
      createProductCategoryDetailInput,
    );
  }

  @Query(() => [ProductCategoryDetail], { name: 'productCategoryDetail' })
  findAll() {
    return this.productCategoryDetailService.findAll();
  }

  @Query(() => ProductCategoryDetail, { name: 'productCategoryDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoryDetailService.findOne(id);
  }

  @Mutation(() => ProductCategoryDetail)
  updateProductCategoryDetail(
    @Args('updateProductCategoryDetailInput')
    updateProductCategoryDetailInput: UpdateProductCategoryDetailInput,
  ) {
    return this.productCategoryDetailService.update(
      updateProductCategoryDetailInput.id,
      updateProductCategoryDetailInput,
    );
  }

  @Mutation(() => ProductCategoryDetail)
  removeProductCategoryDetail(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoryDetailService.remove(id);
  }
}

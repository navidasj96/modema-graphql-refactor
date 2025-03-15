import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductLikeService } from './product-like.service';
import { CreateProductLikeInput } from './dto/create-product-like.input';
import { UpdateProductLikeInput } from './dto/update-product-like.input';
import { ProductLike } from '@/modules/product-like/domain/product-like';

@Resolver(() => ProductLike)
export class ProductLikeResolver {
  constructor(private readonly productLikeService: ProductLikeService) {}

  @Mutation(() => ProductLike)
  createProductLike(
    @Args('createProductLikeInput')
    createProductLikeInput: CreateProductLikeInput,
  ) {
    return this.productLikeService.create(createProductLikeInput);
  }

  @Query(() => [ProductLike], { name: 'productLike' })
  findAll() {
    return this.productLikeService.findAll();
  }

  @Query(() => ProductLike, { name: 'productLike' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productLikeService.findOne(id);
  }

  @Mutation(() => ProductLike)
  updateProductLike(
    @Args('updateProductLikeInput')
    updateProductLikeInput: UpdateProductLikeInput,
  ) {
    return this.productLikeService.update(
      updateProductLikeInput.id,
      updateProductLikeInput,
    );
  }

  @Mutation(() => ProductLike)
  removeProductLike(@Args('id', { type: () => Int }) id: number) {
    return this.productLikeService.remove(id);
  }
}

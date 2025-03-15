import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCommentLikeService } from './product-comment-like.service';
import { CreateProductCommentLikeInput } from './dto/create-product-comment-like.input';
import { UpdateProductCommentLikeInput } from './dto/update-product-comment-like.input';
import { ProductCommentLike } from '@/modules/product-comment-like/domain/product-comment-like';

@Resolver(() => ProductCommentLike)
export class ProductCommentLikeResolver {
  constructor(
    private readonly productCommentLikeService: ProductCommentLikeService,
  ) {}

  @Mutation(() => ProductCommentLike)
  createProductCommentLike(
    @Args('createProductCommentLikeInput')
    createProductCommentLikeInput: CreateProductCommentLikeInput,
  ) {
    return this.productCommentLikeService.create(createProductCommentLikeInput);
  }

  @Query(() => [ProductCommentLike], { name: 'productCommentLike' })
  findAll() {
    return this.productCommentLikeService.findAll();
  }

  @Query(() => ProductCommentLike, { name: 'productCommentLike' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productCommentLikeService.findOne(id);
  }

  @Mutation(() => ProductCommentLike)
  updateProductCommentLike(
    @Args('updateProductCommentLikeInput')
    updateProductCommentLikeInput: UpdateProductCommentLikeInput,
  ) {
    return this.productCommentLikeService.update(
      updateProductCommentLikeInput.id,
      updateProductCommentLikeInput,
    );
  }

  @Mutation(() => ProductCommentLike)
  removeProductCommentLike(@Args('id', { type: () => Int }) id: number) {
    return this.productCommentLikeService.remove(id);
  }
}

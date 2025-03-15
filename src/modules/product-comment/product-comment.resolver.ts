import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCommentService } from './product-comment.service';
import { CreateProductCommentInput } from './dto/create-product-comment.input';
import { UpdateProductCommentInput } from './dto/update-product-comment.input';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';

@Resolver(() => ProductComment)
export class ProductCommentResolver {
  constructor(private readonly productCommentService: ProductCommentService) {}

  @Mutation(() => ProductComment)
  createProductComment(
    @Args('createProductCommentInput')
    createProductCommentInput: CreateProductCommentInput,
  ) {
    return this.productCommentService.create(createProductCommentInput);
  }

  @Query(() => [ProductComment], { name: 'productComment' })
  findAll() {
    return this.productCommentService.findAll();
  }

  @Query(() => ProductComment, { name: 'productComment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productCommentService.findOne(id);
  }

  @Mutation(() => ProductComment)
  updateProductComment(
    @Args('updateProductCommentInput')
    updateProductCommentInput: UpdateProductCommentInput,
  ) {
    return this.productCommentService.update(
      updateProductCommentInput.id,
      updateProductCommentInput,
    );
  }

  @Mutation(() => ProductComment)
  removeProductComment(@Args('id', { type: () => Int }) id: number) {
    return this.productCommentService.remove(id);
  }
}

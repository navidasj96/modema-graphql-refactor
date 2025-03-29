import { Resolver } from '@nestjs/graphql';
import { ProductCommentLikeService } from './product-comment-like.service';
import { ProductCommentLike } from '@/modules/product-comment-like/domain/product-comment-like';

@Resolver(() => ProductCommentLike)
export class ProductCommentLikeResolver {
  constructor(
    private readonly productCommentLikeService: ProductCommentLikeService,
  ) {}
}

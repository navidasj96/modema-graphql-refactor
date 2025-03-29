import { Resolver } from '@nestjs/graphql';
import { ProductCommentService } from './product-comment.service';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';

@Resolver(() => ProductComment)
export class ProductCommentResolver {
  constructor(private readonly productCommentService: ProductCommentService) {}
}

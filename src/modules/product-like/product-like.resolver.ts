import { Resolver } from '@nestjs/graphql';
import { ProductLikeService } from './product-like.service';
import { ProductLike } from '@/modules/product-like/domain/product-like';

@Resolver(() => ProductLike)
export class ProductLikeResolver {
  constructor(private readonly productLikeService: ProductLikeService) {}
}

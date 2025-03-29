import { Resolver } from '@nestjs/graphql';
import { RecommendedProductService } from './recommended-product.service';
import { RecommendedProduct } from '@/modules/recommended-product/domain/recommended-product';

@Resolver(() => RecommendedProduct)
export class RecommendedProductResolver {
  constructor(
    private readonly recommendedProductService: RecommendedProductService,
  ) {}
}

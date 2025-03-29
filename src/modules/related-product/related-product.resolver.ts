import { Resolver } from '@nestjs/graphql';
import { RelatedProductService } from './related-product.service';
import { RelatedProduct } from '@/modules/related-product/domain/related-product';

@Resolver(() => RelatedProduct)
export class RelatedProductResolver {
  constructor(private readonly relatedProductService: RelatedProductService) {}
}

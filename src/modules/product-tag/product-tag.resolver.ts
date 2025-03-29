import { Resolver } from '@nestjs/graphql';
import { ProductTagService } from './product-tag.service';
import { ProductTag } from '@/modules/product-tag/domain/product-tag';

@Resolver(() => ProductTag)
export class ProductTagResolver {
  constructor(private readonly productTagService: ProductTagService) {}
}

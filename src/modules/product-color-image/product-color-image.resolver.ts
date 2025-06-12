import { Resolver } from '@nestjs/graphql';
import { ProductColorImageService } from './product-color-image.service';
import { ProductColorImage } from '@/modules/product-color-image/domain/product-color-image';

@Resolver(() => ProductColorImage)
export class ProductColorImageResolver {
  constructor(
    private readonly productColorImageService: ProductColorImageService
  ) {}
}

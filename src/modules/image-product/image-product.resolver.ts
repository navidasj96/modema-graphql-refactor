import { Resolver } from '@nestjs/graphql';
import { ImageProductService } from './image-product.service';
import { ImageProduct } from '@/modules/image-product/domain/image-product';

@Resolver(() => ImageProduct)
export class ImageProductResolver {
  constructor(private readonly imageProductService: ImageProductService) {}
}

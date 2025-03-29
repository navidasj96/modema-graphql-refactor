import { Resolver } from '@nestjs/graphql';
import { ProductVideoService } from './product-video.service';
import { ProductVideo } from '@/modules/product-video/domain/product-video';

@Resolver(() => ProductVideo)
export class ProductVideoResolver {
  constructor(private readonly productVideoService: ProductVideoService) {}
}

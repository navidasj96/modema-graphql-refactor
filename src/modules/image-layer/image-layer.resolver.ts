import { Resolver } from '@nestjs/graphql';
import { ImageLayerService } from './image-layer.service';
import { ImageLayer } from '@/modules/image-layer/domain/image-layer';

@Resolver(() => ImageLayer)
export class ImageLayerResolver {
  constructor(private readonly imageLayerService: ImageLayerService) {}
}

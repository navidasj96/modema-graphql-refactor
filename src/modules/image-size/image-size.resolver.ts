import { Resolver } from '@nestjs/graphql';
import { ImageSizeService } from './image-size.service';
import { ImageSize } from '@/modules/image-size/domain/image-size';

@Resolver(() => ImageSize)
export class ImageSizeResolver {
  constructor(private readonly imageSizeService: ImageSizeService) {}
}

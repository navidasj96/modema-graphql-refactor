import { Resolver } from '@nestjs/graphql';
import { ImageService } from './image.service';
import { Image } from '@/modules/image/domain/image';

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}
}

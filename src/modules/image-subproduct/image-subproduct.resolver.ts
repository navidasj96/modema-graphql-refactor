import { Resolver } from '@nestjs/graphql';
import { ImageSubproductService } from './image-subproduct.service';
import { ImageSubproduct } from '@/modules/image-subproduct/domain/image-subproduct';

@Resolver(() => ImageSubproduct)
export class ImageSubproductResolver {
  constructor(
    private readonly imageSubproductService: ImageSubproductService
  ) {}
}

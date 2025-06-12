import { Resolver } from '@nestjs/graphql';
import { ModemaAcceleratorImageService } from './modema-accelerator-image.service';
import { ModemaAcceleratorImage } from '@/modules/modema-accelerator-image/domain/modema-accelerator-image';

@Resolver(() => ModemaAcceleratorImage)
export class ModemaAcceleratorImageResolver {
  constructor(
    private readonly modemaAcceleratorImageService: ModemaAcceleratorImageService
  ) {}
}

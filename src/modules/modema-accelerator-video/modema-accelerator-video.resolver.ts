import { Resolver } from '@nestjs/graphql';
import { ModemaAcceleratorVideoService } from './modema-accelerator-video.service';
import { ModemaAcceleratorVideo } from '@/modules/modema-accelerator-video/domain/modema-accelerator-video';

@Resolver(() => ModemaAcceleratorVideo)
export class ModemaAcceleratorVideoResolver {
  constructor(
    private readonly modemaAcceleratorVideoService: ModemaAcceleratorVideoService
  ) {}
}

import { Resolver } from '@nestjs/graphql';
import { VideoService } from './video.service';
import { Video } from '@/modules/video/domain/video';

@Resolver(() => Video)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}
}

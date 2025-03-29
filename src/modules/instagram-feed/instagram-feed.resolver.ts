import { Resolver } from '@nestjs/graphql';
import { InstagramFeedService } from './instagram-feed.service';
import { InstagramFeed } from '@/modules/instagram-feed/domain/instagram-feed';

@Resolver(() => InstagramFeed)
export class InstagramFeedResolver {
  constructor(private readonly instagramFeedService: InstagramFeedService) {}
}

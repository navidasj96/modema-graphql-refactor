import { Resolver } from '@nestjs/graphql';
import { ReturnRequestItemVideoService } from './return-request-item-video.service';
import { ReturnRequestItemVideo } from '@/modules/return-request-item-video/domain/return-request-item-video';

@Resolver(() => ReturnRequestItemVideo)
export class ReturnRequestItemVideoResolver {
  constructor(
    private readonly returnRequestItemVideoService: ReturnRequestItemVideoService
  ) {}
}

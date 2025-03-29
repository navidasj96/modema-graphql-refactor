import { Resolver } from '@nestjs/graphql';
import { SubproductVideoService } from './subproduct-video.service';
import { SubproductVideo } from '@/modules/subproduct-video/domain/subproduct-video';

@Resolver(() => SubproductVideo)
export class SubproductVideoResolver {
  constructor(
    private readonly subproductVideoService: SubproductVideoService,
  ) {}
}

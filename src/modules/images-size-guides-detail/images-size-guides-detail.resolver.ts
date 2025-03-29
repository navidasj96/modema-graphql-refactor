import { Resolver } from '@nestjs/graphql';
import { ImagesSizeGuidesDetailService } from './images-size-guides-detail.service';
import { ImagesSizeGuidesDetail } from '@/modules/images-size-guides-detail/domain/images-size-guides-detail';

@Resolver(() => ImagesSizeGuidesDetail)
export class ImagesSizeGuidesDetailResolver {
  constructor(
    private readonly imagesSizeGuidesDetailService: ImagesSizeGuidesDetailService,
  ) {}
}

import { Resolver } from '@nestjs/graphql';
import { SizeGuidesDetailService } from './size-guides-detail.service';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/domain/size-guides-detail';

@Resolver(() => SizeGuidesDetail)
export class SizeGuidesDetailResolver {
  constructor(
    private readonly sizeGuidesDetailService: SizeGuidesDetailService
  ) {}
}

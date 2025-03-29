import { Resolver } from '@nestjs/graphql';
import { SizeGuideService } from './size-guide.service';
import { SizeGuide } from '@/modules/size-guide/domain/size-guide';

@Resolver(() => SizeGuide)
export class SizeGuideResolver {
  constructor(private readonly sizeGuideService: SizeGuideService) {}
}

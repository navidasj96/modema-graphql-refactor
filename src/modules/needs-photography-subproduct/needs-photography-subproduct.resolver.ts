import { Resolver } from '@nestjs/graphql';
import { NeedsPhotographySubproductService } from './needs-photography-subproduct.service';
import { NeedsPhotographySubproduct } from '@/modules/needs-photography-subproduct/domain/needs-photography-subproduct';

@Resolver(() => NeedsPhotographySubproduct)
export class NeedsPhotographySubproductResolver {
  constructor(
    private readonly needsPhotographySubproductService: NeedsPhotographySubproductService,
  ) {}
}

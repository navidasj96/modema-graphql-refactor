import { Resolver } from '@nestjs/graphql';
import { RecommendedSubproductService } from './recommended-subproduct.service';
import { RecommendedSubproduct } from '@/modules/recommended-subproduct/domain/recommended-subproduct';

@Resolver(() => RecommendedSubproduct)
export class RecommendedSubproductResolver {
  constructor(
    private readonly recommendedSubproductService: RecommendedSubproductService
  ) {}
}

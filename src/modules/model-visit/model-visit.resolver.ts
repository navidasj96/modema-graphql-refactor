import { Resolver } from '@nestjs/graphql';
import { ModelVisitService } from './model-visit.service';
import { ModelVisit } from '@/modules/model-visit/domain/model-visit';

@Resolver(() => ModelVisit)
export class ModelVisitResolver {
  constructor(private readonly modelVisitService: ModelVisitService) {}
}

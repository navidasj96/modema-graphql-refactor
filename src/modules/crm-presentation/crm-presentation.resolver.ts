import { Resolver } from '@nestjs/graphql';
import { CrmPresentationService } from './crm-presentation.service';
import { CrmPresentation } from './domain/crm-presentation';

@Resolver(() => CrmPresentation)
export class CrmPresentationResolver {
  constructor(
    private readonly crmPresentationService: CrmPresentationService,
  ) {}
}

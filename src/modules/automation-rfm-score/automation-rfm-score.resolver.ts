import { Resolver } from '@nestjs/graphql';
import { AutomationRfmScoreService } from './automation-rfm-score.service';
import { AutomationRfmScore } from './domain/automation-rfm-score';

@Resolver(() => AutomationRfmScore)
export class AutomationRfmScoreResolver {
  constructor(
    private readonly automationRfmScoreService: AutomationRfmScoreService,
  ) {}
}

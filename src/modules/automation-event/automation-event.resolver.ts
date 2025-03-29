import { Resolver } from '@nestjs/graphql';
import { AutomationEventService } from './automation-event.service';
import { AutomationEvent } from './domain/automation-event';

@Resolver(() => AutomationEvent)
export class AutomationEventResolver {
  constructor(
    private readonly automationEventService: AutomationEventService,
  ) {}
}

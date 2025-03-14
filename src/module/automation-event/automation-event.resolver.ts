import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AutomationEventService } from './automation-event.service';
import { CreateAutomationEventInput } from './dto/create-automation-event.input';
import { AutomationEvent } from './domain/automation-event';

@Resolver(() => AutomationEvent)
export class AutomationEventResolver {
  constructor(
    private readonly automationEventService: AutomationEventService,
  ) {}

  @Mutation(() => AutomationEvent)
  createAutomationEvent(
    @Args('createAutomationEventInput')
    createAutomationEventInput: CreateAutomationEventInput,
  ) {
    return this.automationEventService.create(createAutomationEventInput);
  }

  @Query(() => [AutomationEvent], { name: 'automationEvent' })
  findAll() {
    return this.automationEventService.findAll();
  }

  @Query(() => AutomationEvent, { name: 'automationEvent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.automationEventService.findOne(id);
  }

  // @Mutation(() => AutomationEvent)
  // updateAutomationEvent(@Args('updateAutomationEventInput') updateAutomationEventInput: UpdateAutomationEventInput) {
  //   return this.automationEventService.update(updateAutomationEventInput.id, updateAutomationEventInput);
  // }

  @Mutation(() => AutomationEvent)
  removeAutomationEvent(@Args('id', { type: () => Int }) id: number) {
    return this.automationEventService.remove(id);
  }
}

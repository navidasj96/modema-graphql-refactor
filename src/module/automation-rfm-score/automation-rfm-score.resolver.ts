import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AutomationRfmScoreService } from './automation-rfm-score.service';
import { CreateAutomationRfmScoreInput } from './dto/create-automation-rfm-score.input';
import { UpdateAutomationRfmScoreInput } from './dto/update-automation-rfm-score.input';
import { AutomationRfmScore } from './domain/automation-rfm-score';

@Resolver(() => AutomationRfmScore)
export class AutomationRfmScoreResolver {
  constructor(
    private readonly automationRfmScoreService: AutomationRfmScoreService,
  ) {}

  @Mutation(() => AutomationRfmScore)
  createAutomationRfmScore(
    @Args('createAutomationRfmScoreInput')
    createAutomationRfmScoreInput: CreateAutomationRfmScoreInput,
  ) {
    return this.automationRfmScoreService.create(createAutomationRfmScoreInput);
  }

  @Query(() => [AutomationRfmScore], { name: 'automationRfmScore' })
  findAll() {
    return this.automationRfmScoreService.findAll();
  }

  @Query(() => AutomationRfmScore, { name: 'automationRfmScore' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.automationRfmScoreService.findOne(id);
  }

  @Mutation(() => AutomationRfmScore)
  updateAutomationRfmScore(
    @Args('updateAutomationRfmScoreInput')
    updateAutomationRfmScoreInput: UpdateAutomationRfmScoreInput,
  ) {
    return this.automationRfmScoreService.update(
      updateAutomationRfmScoreInput.id,
      updateAutomationRfmScoreInput,
    );
  }

  @Mutation(() => AutomationRfmScore)
  removeAutomationRfmScore(@Args('id', { type: () => Int }) id: number) {
    return this.automationRfmScoreService.remove(id);
  }
}

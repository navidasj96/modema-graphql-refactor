import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SettingsHistoryService } from './settings-history.service';
import { CreateSettingsHistoryInput } from './dto/create-settings-history.input';
import { UpdateSettingsHistoryInput } from './dto/update-settings-history.input';
import { SettingsHistory } from '@/modules/settings-history/domain/setting-history';

@Resolver(() => SettingsHistory)
export class SettingsHistoryResolver {
  constructor(
    private readonly settingsHistoryService: SettingsHistoryService
  ) {}

  @Mutation(() => SettingsHistory)
  createSettingsHistory(
    @Args('createSettingsHistoryInput')
    createSettingsHistoryInput: CreateSettingsHistoryInput
  ) {
    return this.settingsHistoryService.create(createSettingsHistoryInput);
  }

  @Query(() => [SettingsHistory], { name: 'settingsHistory' })
  findAll() {
    return this.settingsHistoryService.findAll();
  }

  @Query(() => SettingsHistory, { name: 'settingsHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.settingsHistoryService.findOne(id);
  }

  @Mutation(() => SettingsHistory)
  updateSettingsHistory(
    @Args('updateSettingsHistoryInput')
    updateSettingsHistoryInput: UpdateSettingsHistoryInput
  ) {
    return this.settingsHistoryService.update(
      updateSettingsHistoryInput.id,
      updateSettingsHistoryInput
    );
  }

  @Mutation(() => SettingsHistory)
  removeSettingsHistory(@Args('id', { type: () => Int }) id: number) {
    return this.settingsHistoryService.remove(id);
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SettingService } from './setting.service';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';
import { Setting } from '@/modules/setting/domain/setting';

@Resolver(() => Setting)
export class SettingResolver {
  constructor(private readonly settingService: SettingService) {}

  @Mutation(() => Setting)
  createSetting(
    @Args('createSettingInput') createSettingInput: CreateSettingInput
  ) {
    return this.settingService.create(createSettingInput);
  }

  @Query(() => [Setting], { name: 'setting' })
  findAll() {
    return this.settingService.findAll();
  }

  @Query(() => Setting, { name: 'setting' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.settingService.findOne(id);
  }

  @Mutation(() => Setting)
  updateSetting(
    @Args('updateSettingInput') updateSettingInput: UpdateSettingInput
  ) {
    return this.settingService.update(
      updateSettingInput.id,
      updateSettingInput
    );
  }

  @Mutation(() => Setting)
  removeSetting(@Args('id', { type: () => Int }) id: number) {
    return this.settingService.remove(id);
  }
}

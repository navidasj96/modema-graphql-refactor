import { CreateSettingsHistoryInput } from './create-settings-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSettingsHistoryInput extends PartialType(CreateSettingsHistoryInput) {
  @Field(() => Int)
  id: number;
}

import { CreateAutomationRfmScoreInput } from './create-automation-rfm-score.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAutomationRfmScoreInput extends PartialType(CreateAutomationRfmScoreInput) {
  @Field(() => Int)
  id: number;
}

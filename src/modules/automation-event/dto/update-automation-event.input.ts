import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateAutomationEventInput } from '@/modules/automation-event/dto/create-automation-event.input';

@InputType()
export class UpdateAutomationEventInput extends PartialType(
  CreateAutomationEventInput
) {
  @Field(() => Int)
  id: number;
}

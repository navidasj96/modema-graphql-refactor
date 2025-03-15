import { CreateDamageReasonInput } from './create-damage-reason.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDamageReasonInput extends PartialType(CreateDamageReasonInput) {
  @Field(() => Int)
  id: number;
}

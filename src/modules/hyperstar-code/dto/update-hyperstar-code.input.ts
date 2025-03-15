import { CreateHyperstarCodeInput } from './create-hyperstar-code.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHyperstarCodeInput extends PartialType(CreateHyperstarCodeInput) {
  @Field(() => Int)
  id: number;
}

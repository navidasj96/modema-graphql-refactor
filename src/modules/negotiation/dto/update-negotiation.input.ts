import { CreateNegotiationInput } from './create-negotiation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNegotiationInput extends PartialType(
  CreateNegotiationInput
) {
  @Field(() => Int)
  id: number;
}

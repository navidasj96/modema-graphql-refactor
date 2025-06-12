import { CreateNegotiationStatusInput } from './create-negotiation-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNegotiationStatusInput extends PartialType(
  CreateNegotiationStatusInput
) {
  @Field(() => Int)
  id: number;
}

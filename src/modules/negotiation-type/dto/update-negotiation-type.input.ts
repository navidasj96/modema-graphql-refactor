import { CreateNegotiationTypeInput } from './create-negotiation-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNegotiationTypeInput extends PartialType(CreateNegotiationTypeInput) {
  @Field(() => Int)
  id: number;
}

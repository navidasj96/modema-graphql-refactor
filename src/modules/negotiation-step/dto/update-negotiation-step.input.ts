import { CreateNegotiationStepInput } from './create-negotiation-step.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNegotiationStepInput extends PartialType(CreateNegotiationStepInput) {
  @Field(() => Int)
  id: number;
}

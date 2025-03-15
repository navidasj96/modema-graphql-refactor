import { CreateNegotiationHistoryInput } from './create-negotiation-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNegotiationHistoryInput extends PartialType(CreateNegotiationHistoryInput) {
  @Field(() => Int)
  id: number;
}

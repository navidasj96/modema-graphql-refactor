import { CreateChaparSettlementStatusInput } from './create-chapar-settlement-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChaparSettlementStatusInput extends PartialType(CreateChaparSettlementStatusInput) {
  @Field(() => Int)
  id: number;
}

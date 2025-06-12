import { CreateReturnRequestItemHistoryInput } from './create-return-request-item-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestItemHistoryInput extends PartialType(
  CreateReturnRequestItemHistoryInput
) {
  @Field(() => Int)
  id: number;
}

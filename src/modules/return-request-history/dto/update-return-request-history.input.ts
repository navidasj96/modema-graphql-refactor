import { CreateReturnRequestHistoryInput } from './create-return-request-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestHistoryInput extends PartialType(
  CreateReturnRequestHistoryInput
) {
  @Field(() => Int)
  id: number;
}

import { CreateReturnRequestItemReturnItemStatusInput } from './create-return-request-item-return-item-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestItemReturnItemStatusInput extends PartialType(
  CreateReturnRequestItemReturnItemStatusInput
) {
  @Field(() => Int)
  id: number;
}

import { CreateReturnItemStatusReturnRequestItemInput } from './create-return-item-status-return-request-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnItemStatusReturnRequestItemInput extends PartialType(CreateReturnItemStatusReturnRequestItemInput) {
  @Field(() => Int)
  id: number;
}

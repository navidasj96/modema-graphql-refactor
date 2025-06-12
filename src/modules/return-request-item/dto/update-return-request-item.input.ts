import { CreateReturnRequestItemInput } from './create-return-request-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestItemInput extends PartialType(
  CreateReturnRequestItemInput
) {
  @Field(() => Int)
  id: number;
}

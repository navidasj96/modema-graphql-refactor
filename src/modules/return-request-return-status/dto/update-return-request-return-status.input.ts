import { CreateReturnRequestReturnStatusInput } from './create-return-request-return-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestReturnStatusInput extends PartialType(CreateReturnRequestReturnStatusInput) {
  @Field(() => Int)
  id: number;
}

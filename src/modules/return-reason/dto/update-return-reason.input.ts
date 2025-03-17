import { CreateReturnReasonInput } from './create-return-reason.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnReasonInput extends PartialType(CreateReturnReasonInput) {
  @Field(() => Int)
  id: number;
}

import { CreateReturnRequestInput } from './create-return-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestInput extends PartialType(CreateReturnRequestInput) {
  @Field(() => Int)
  id: number;
}

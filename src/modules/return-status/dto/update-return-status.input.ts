import { CreateReturnStatusInput } from './create-return-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnStatusInput extends PartialType(CreateReturnStatusInput) {
  @Field(() => Int)
  id: number;
}

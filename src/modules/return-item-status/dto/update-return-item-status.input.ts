import { CreateReturnItemStatusInput } from './create-return-item-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnItemStatusInput extends PartialType(CreateReturnItemStatusInput) {
  @Field(() => Int)
  id: number;
}

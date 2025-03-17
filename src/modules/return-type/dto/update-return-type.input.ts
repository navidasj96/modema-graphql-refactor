import { CreateReturnTypeInput } from './create-return-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnTypeInput extends PartialType(CreateReturnTypeInput) {
  @Field(() => Int)
  id: number;
}

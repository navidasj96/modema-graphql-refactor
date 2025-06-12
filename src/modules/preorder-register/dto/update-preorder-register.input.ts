import { CreatePreorderRegisterInput } from './create-preorder-register.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePreorderRegisterInput extends PartialType(
  CreatePreorderRegisterInput
) {
  @Field(() => Int)
  id: number;
}

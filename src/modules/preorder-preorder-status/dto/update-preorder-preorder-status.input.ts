import { CreatePreorderPreorderStatusInput } from './create-preorder-preorder-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePreorderPreorderStatusInput extends PartialType(
  CreatePreorderPreorderStatusInput
) {
  @Field(() => Int)
  id: number;
}

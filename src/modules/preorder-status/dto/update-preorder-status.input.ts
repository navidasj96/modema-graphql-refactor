import { CreatePreorderStatusInput } from './create-preorder-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePreorderStatusInput extends PartialType(CreatePreorderStatusInput) {
  @Field(() => Int)
  id: number;
}

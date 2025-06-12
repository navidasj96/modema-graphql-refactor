import { CreateLabelProductInput } from './create-label-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLabelProductInput extends PartialType(
  CreateLabelProductInput
) {
  @Field(() => Int)
  id: number;
}

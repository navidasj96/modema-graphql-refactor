import { CreateAttributeProductInput } from './create-attribute-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttributeProductInput extends PartialType(CreateAttributeProductInput) {
  @Field(() => Int)
  id: number;
}

import { CreateProductTagInput } from './create-product-tag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductTagInput extends PartialType(CreateProductTagInput) {
  @Field(() => Int)
  id: number;
}

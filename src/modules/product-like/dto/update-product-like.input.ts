import { CreateProductLikeInput } from './create-product-like.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductLikeInput extends PartialType(
  CreateProductLikeInput
) {
  @Field(() => Int)
  id: number;
}

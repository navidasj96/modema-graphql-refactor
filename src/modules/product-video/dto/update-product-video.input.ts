import { CreateProductVideoInput } from './create-product-video.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductVideoInput extends PartialType(
  CreateProductVideoInput
) {
  @Field(() => Int)
  id: number;
}

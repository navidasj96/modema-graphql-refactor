import { CreateProductColorImageInput } from './create-product-color-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductColorImageInput extends PartialType(CreateProductColorImageInput) {
  @Field(() => Int)
  id: number;
}

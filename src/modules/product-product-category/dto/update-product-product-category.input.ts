import { CreateProductProductCategoryInput } from './create-product-product-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductProductCategoryInput extends PartialType(CreateProductProductCategoryInput) {
  @Field(() => Int)
  id: number;
}

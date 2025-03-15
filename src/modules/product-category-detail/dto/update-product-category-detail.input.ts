import { CreateProductCategoryDetailInput } from './create-product-category-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductCategoryDetailInput extends PartialType(CreateProductCategoryDetailInput) {
  @Field(() => Int)
  id: number;
}

import { CreateProductCategoryRateInput } from './create-product-category-rate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductCategoryRateInput extends PartialType(CreateProductCategoryRateInput) {
  @Field(() => Int)
  id: number;
}

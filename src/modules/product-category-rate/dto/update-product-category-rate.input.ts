import { CreateProductCategoryRateInput } from './create-product-category-rate.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType('UpdateProductCategoryRateInput')
export class UpdateProductCategoryRateInput extends PartialType(
  CreateProductCategoryRateInput
) {
  @Field(() => Int)
  id: number;
}

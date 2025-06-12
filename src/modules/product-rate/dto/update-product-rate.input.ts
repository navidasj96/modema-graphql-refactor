import { CreateProductRateInput } from './create-product-rate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductRateInput extends PartialType(
  CreateProductRateInput
) {
  @Field(() => Int)
  id: number;
}

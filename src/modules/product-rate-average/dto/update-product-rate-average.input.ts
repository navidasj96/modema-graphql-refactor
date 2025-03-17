import { CreateProductRateAverageInput } from './create-product-rate-average.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductRateAverageInput extends PartialType(CreateProductRateAverageInput) {
  @Field(() => Int)
  id: number;
}

import { CreateRecommendedProductInput } from './create-recommended-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecommendedProductInput extends PartialType(
  CreateRecommendedProductInput
) {
  @Field(() => Int)
  id: number;
}

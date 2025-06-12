import { CreateRecommendedSubproductInput } from './create-recommended-subproduct.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRecommendedSubproductInput extends PartialType(
  CreateRecommendedSubproductInput
) {
  @Field(() => Int)
  id: number;
}

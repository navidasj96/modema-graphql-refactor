import { CreateColorCategorySubproductInput } from './create-color-category-subproduct.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateColorCategorySubproductInput extends PartialType(CreateColorCategorySubproductInput) {
  @Field(() => Int)
  id: number;
}

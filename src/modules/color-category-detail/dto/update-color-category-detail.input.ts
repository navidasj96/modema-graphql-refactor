import { CreateColorCategoryDetailInput } from './create-color-category-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateColorCategoryDetailInput extends PartialType(CreateColorCategoryDetailInput) {
  @Field(() => Int)
  id: number;
}

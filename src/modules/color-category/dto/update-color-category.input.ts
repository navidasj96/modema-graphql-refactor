import { CreateColorCategoryInput } from './create-color-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateColorCategoryInput extends PartialType(CreateColorCategoryInput) {
  @Field(() => Int)
  id: number;
}

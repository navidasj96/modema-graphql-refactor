import { CreatePatternCategoryInput } from './create-pattern-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatternCategoryInput extends PartialType(
  CreatePatternCategoryInput
) {
  @Field(() => Int)
  id: number;
}

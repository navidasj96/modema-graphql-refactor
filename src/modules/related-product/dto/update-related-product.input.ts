import { CreateRelatedProductInput } from './create-related-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRelatedProductInput extends PartialType(CreateRelatedProductInput) {
  @Field(() => Int)
  id: number;
}

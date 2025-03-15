import { CreateProductCommentInput } from './create-product-comment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductCommentInput extends PartialType(CreateProductCommentInput) {
  @Field(() => Int)
  id: number;
}

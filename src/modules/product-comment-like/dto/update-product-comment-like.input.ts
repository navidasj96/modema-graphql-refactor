import { CreateProductCommentLikeInput } from './create-product-comment-like.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductCommentLikeInput extends PartialType(
  CreateProductCommentLikeInput
) {
  @Field(() => Int)
  id: number;
}

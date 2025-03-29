import { Field, InputType } from '@nestjs/graphql';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';
import { User } from '@/modules/user/domain/user';

@InputType('CreateProductCommentLikeInput')
export class CreateProductCommentLikeInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  productCommentId: number;

  @Field({ nullable: true })
  isLiked?: boolean;

  @Field({ nullable: true })
  isDisliked?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductComment)
  productComment: ProductComment;

  @Field(() => User)
  user: User;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class ProductCommentLike {
  @IDField(() => ID)
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

import { ProductCommentPure } from '@/modules/product-comment/domain/product-comment.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductCommentLikePureDomain')
@ObjectType()
export class ProductCommentLikePure {
  @Field(() => ID)
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

  @Field(() => ProductCommentPure)
  productComment: ProductCommentPure;

  @Field(() => UserPure)
  user: UserPure;
}

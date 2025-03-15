import { Field, InputType } from '@nestjs/graphql';

@InputType()
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
}

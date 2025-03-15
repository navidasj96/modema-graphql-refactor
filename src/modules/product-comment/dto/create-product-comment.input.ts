import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductCommentInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  parentCommentId?: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  approvedBy?: number;

  @Field()
  comment: string;

  @Field()
  approved: boolean;

  @Field()
  starred: boolean;

  @Field({ nullable: true })
  isBuyer?: boolean;

  @Field({ nullable: true })
  recommended?: boolean;

  @Field()
  totalLikes: number;

  @Field()
  totalDislikes: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

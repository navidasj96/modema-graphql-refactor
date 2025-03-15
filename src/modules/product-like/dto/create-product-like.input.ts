import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductLikeInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field()
  isLike: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRecommendedProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

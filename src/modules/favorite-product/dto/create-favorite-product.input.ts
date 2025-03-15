import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFavoriteProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;
}

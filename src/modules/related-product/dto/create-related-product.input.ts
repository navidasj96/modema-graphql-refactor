import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRelatedProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  relatedProductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

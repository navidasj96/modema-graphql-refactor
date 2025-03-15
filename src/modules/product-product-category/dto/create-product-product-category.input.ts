import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductProductCategoryInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  productCategoryId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

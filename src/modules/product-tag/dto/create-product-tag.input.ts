import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductTagInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  tagId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLabelProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  labelId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

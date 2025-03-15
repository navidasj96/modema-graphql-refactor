import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerVideoProductInput {
  @Field()
  id: number;

  @Field()
  videoId: number;

  @Field()
  productId: number;

  @Field({ nullable: true, defaultValue: 0 })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

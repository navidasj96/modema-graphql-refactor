import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVisitorGroupInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  couponDiscountRate: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

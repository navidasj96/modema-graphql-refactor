import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVisitorGroupRateInput {
  @Field()
  id: number;

  @Field()
  visitorGroupId: number;

  @Field()
  minRevenue: number;

  @Field()
  maxRevenue: number;

  @Field()
  rate: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

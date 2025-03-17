import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVisitorCouponInput {
  @Field()
  id: number;

  @Field()
  visitorId: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

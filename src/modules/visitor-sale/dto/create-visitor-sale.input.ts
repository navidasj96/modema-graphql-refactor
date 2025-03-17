import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVisitorSaleInput {
  @Field()
  id: number;

  @Field()
  visitorId: number;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  visitorGroupId: number;

  @Field()
  rate: number;

  @Field({ nullable: true })
  totalSale?: number;

  @Field({ nullable: true })
  totalShare?: number;

  @Field()
  yearSh: number;

  @Field()
  monthSh: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

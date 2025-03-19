import { Field, InputType } from '@nestjs/graphql';
import { VisitorGroup } from '@/modules/visitor-group/domain/visitor-group';
import { Visitor } from '@/modules/visitor/domain/visitor';

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

  @Field(() => VisitorGroup)
  visitorGroup: VisitorGroup;

  @Field(() => Visitor)
  visitor: Visitor;
}

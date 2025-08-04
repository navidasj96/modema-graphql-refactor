import { VisitorGroupPure } from '@/modules/visitor-group/domain/visitor-group.pure';
import { VisitorPure } from '@/modules/visitor/domain/visitor.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VisitorSalePureDomain')
@ObjectType()
export class VisitorSalePure {
  @Field(() => ID)
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

  @Field(() => VisitorGroupPure)
  visitorGroup: VisitorGroupPure;

  @Field(() => VisitorPure)
  visitor: VisitorPure;
}

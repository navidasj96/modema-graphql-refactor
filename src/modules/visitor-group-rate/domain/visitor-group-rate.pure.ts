import { VisitorGroupPure } from '@/modules/visitor-group/domain/visitor-group.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VisitorGroupRatePureDomain')
@ObjectType()
export class VisitorGroupRatePure {
  @Field(() => ID)
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

  @Field(() => VisitorGroupPure)
  visitorGroup: VisitorGroupPure;
}

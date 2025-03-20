import { Field, InputType } from '@nestjs/graphql';
import { VisitorGroup } from '@/modules/visitor-group/domain/visitor-group';

@InputType('CreateVisitorGroupRateInput')
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

  @Field(() => VisitorGroup)
  visitorGroup: VisitorGroup;
}

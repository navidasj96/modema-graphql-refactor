import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { LabelProduct } from '@/modules/label-product/domain/label-product';

@InputType('LabelDomain')
@ObjectType()
export class Label {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  textColor: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [LabelProduct], { nullable: true })
  labelProducts?: LabelProduct[];
}

import { LabelProductPure } from '@/modules/label-product/domain/label-product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('LabelPureDomain')
@ObjectType()
export class LabelPure {
  @Field(() => ID)
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

  @Field(() => [LabelProductPure], { nullable: true })
  labelProducts?: LabelProductPure[];
}

import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Label } from '@/modules/label/domain/label';
import { Product } from '@/modules/product/domain/product';

@InputType('LabelProductDomain')
@ObjectType()
export class LabelProduct {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  labelId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Label, { nullable: true })
  label?: Label;

  @Field(() => Product, { nullable: true })
  product?: Product;
}

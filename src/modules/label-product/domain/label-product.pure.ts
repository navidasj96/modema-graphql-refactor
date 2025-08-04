import { LabelPure } from '@/modules/label/domain/label.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('LabelProductPureDomain')
@ObjectType()
export class LabelProductPure {
  @Field(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  labelId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => LabelPure, { nullable: true })
  label?: LabelPure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;
}

import { Field, InputType } from '@nestjs/graphql';
import { Label } from '@/modules/label/domain/label';
import { Product } from '@/modules/product/domain/product';

@InputType('CreateLabelProductInput')
export class CreateLabelProductInput {
  @Field()
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

import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';
import { Rate } from '@/modules/rate/domain/rate';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('CreateProductRateAverageInput')
export class CreateProductRateAverageInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  rateId: number;

  @Field()
  averageRate: number;

  @Field()
  rateCount: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Product)
  product: Product;

  @Field(() => Rate)
  rate: Rate;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;
}

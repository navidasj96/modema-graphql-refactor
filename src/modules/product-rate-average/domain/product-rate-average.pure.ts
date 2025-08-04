import { ProductPure } from '@/modules/product/domain/product.pure';
import { RatePure } from '@/modules/rate/domain/rate.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductRateAveragePureDomain')
@ObjectType()
export class ProductRateAveragePure {
  @Field(() => ID)
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

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => RatePure)
  rate: RatePure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;
}

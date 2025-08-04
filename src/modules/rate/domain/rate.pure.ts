import { ProductCategoryRatePure } from '@/modules/product-category-rate/domain/product-category-rate.pure';
import { ProductRateAveragePure } from '@/modules/product-rate-average/domain/product-rate-average.pure';
import { ProductRatePure } from '@/modules/product-rate/domain/product-rate.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('RatePureDomain')
@ObjectType()
export class RatePure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ProductCategoryRatePure])
  productCategoryRates: ProductCategoryRatePure[];

  @Field(() => [ProductRatePure])
  productRates: ProductRatePure[];

  @Field(() => [ProductRateAveragePure])
  productRateAverages: ProductRateAveragePure[];
}

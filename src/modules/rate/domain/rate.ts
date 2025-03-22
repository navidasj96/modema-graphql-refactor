import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductCategoryRate } from '@/modules/product-category-rate/domain/product-category-rate';
import { ProductRate } from '@/modules/product-rate/domain/product-rate';
import { ProductRateAverage } from '@/modules/product-rate-average/domain/product-rate-average';

@InputType('RateDomain')
@ObjectType()
export class Rate {
  @IDField(() => ID)
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

  @Field(() => [ProductCategoryRate])
  productCategoryRates: ProductCategoryRate[];

  @Field(() => [ProductRate])
  productRates: ProductRate[];

  @Field(() => [ProductRateAverage])
  productRateAverages: ProductRateAverage[];
}

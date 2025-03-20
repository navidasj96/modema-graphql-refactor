import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductCategoryRate } from '@/modules/product-category-rate/entities/product-category-rate.entity';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { ProductRateAverage } from '@/modules/product-rate-average/entities/product-rate-average.entity';

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

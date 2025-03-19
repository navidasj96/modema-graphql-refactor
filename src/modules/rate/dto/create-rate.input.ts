import { Field, InputType } from '@nestjs/graphql';
import { ProductCategoryRate } from '@/modules/product-category-rate/entities/product-category-rate.entity';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { ProductRateAverage } from '@/modules/product-rate-average/entities/product-rate-average.entity';

@InputType()
export class CreateRateInput {
  @Field()
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

import { Field, InputType } from '@nestjs/graphql';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { Rate } from '@/modules/rate/domain/rate';

@InputType('CreateProductCategoryRateInput')
export class CreateProductCategoryRateInput {
  @Field()
  id: number;

  @Field()
  productCategoryId: number;

  @Field()
  rateId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @Field(() => Rate)
  rate: Rate;
}

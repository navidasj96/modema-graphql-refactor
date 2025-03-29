import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { Rate } from '@/modules/rate/domain/rate';

@InputType('ProductCategoryRateDomain')
@ObjectType()
export class ProductCategoryRate {
  @IDField(() => ID)
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

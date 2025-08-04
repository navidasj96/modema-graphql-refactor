import { ProductCategoryPure } from '@/modules/product-category/domain/product-category.pure';
import { RatePure } from '@/modules/rate/domain/rate.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductCategoryRatePureDomain')
@ObjectType()
export class ProductCategoryRatePure {
  @Field(() => ID)
  id: number;

  @Field()
  productCategoryId: number;

  @Field()
  rateId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductCategoryPure)
  productCategory: ProductCategoryPure;

  @Field(() => RatePure)
  rate: RatePure;
}

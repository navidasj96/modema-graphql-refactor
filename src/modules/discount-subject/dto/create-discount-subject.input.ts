import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDiscountSubjectInput {
  @Field()
  id: number;

  @Field()
  discountId: number;

  @Field({ nullable: true })
  productCategoryId?: number;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  priceGroupId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

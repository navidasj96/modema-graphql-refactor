import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTempSubproductDiscountInput {
  @Field()
  viewSubproductId: number;

  @Field()
  viewProductId: number;

  @Field({ nullable: true })
  subproductDiscountId?: number;

  @Field({ nullable: true })
  productDiscountId?: number;

  @Field({ nullable: true })
  categoryDiscountId?: number;

  @Field({ nullable: true })
  sizeDiscountId?: number;

  @Field({ nullable: true })
  priceGroupDiscountId?: number;

  @Field({ nullable: true })
  allWithStockDiscountId?: number;

  @Field({ nullable: true })
  allDiscountId?: number;

  @Field({ nullable: true })
  priceMinusDiscount?: string;

  @Field({ nullable: true })
  padPriceMinusDiscount?: string;

  @Field({ nullable: true })
  discountPercent?: number;

  @Field({ nullable: true })
  padDiscountPercent?: number;

  @Field({ nullable: true })
  totalDiscountPercent?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

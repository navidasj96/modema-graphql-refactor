import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceProductPureInput')
@ObjectType('InvoiceProductPure')
export class InvoiceProductPure {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  designId?: number;

  @Field({ nullable: true })
  discountId?: number;

  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  length?: number;

  @Field({ nullable: true })
  pricePerInch?: number;

  @Field()
  price: number;

  @Field()
  bundlePrice: string;

  @Field({ nullable: true })
  discount?: string;

  @Field()
  count: number;

  @Field()
  bundleCount: number;

  @Field({ nullable: true })
  totalPrice?: number;

  @Field({ nullable: true })
  totalDiscount?: string;

  @Field()
  isCouponApplicable: number;

  @Field({ nullable: true })
  totalCouponDiscount?: string;

  @Field({ nullable: true })
  designerPricePercentage?: number;

  @Field({ nullable: true })
  designerPriceShare?: number;

  @Field()
  withPad: number;

  @Field({ nullable: true })
  padId?: number;

  @Field({ nullable: true })
  relatedProductId?: number;

  @Field({ nullable: true })
  relatedSubproductId?: number;

  @Field()
  invoiceProductItemsCreated: number;

  @Field({ nullable: true })
  itemsToProduce?: number;

  @Field({ nullable: true })
  itemsFromDepot?: number;

  @Field({ nullable: true })
  stockCount?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  tempDepotItemsCreated: number;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field()
  gift: number;

  @Field()
  manuallyAdded: number;

  @Field(() => SubproductPure, { nullable: true })
  subproduct: SubproductPure;
}

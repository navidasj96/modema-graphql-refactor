import { DesignPure } from '@/modules/design/domain/design.pure';
import { DiscountPure } from '@/modules/discount/domain/discount.pure';
import { InvoiceHistoryPure } from '@/modules/invoice-history/domain/invoice-history.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceProductHistoryPureDomain')
@ObjectType()
export class InvoiceProductHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceHistoryId: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  invoiceProductId?: number;

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
  manuallyAdded: number;

  @Field(() => DesignPure, { nullable: true })
  design?: DesignPure;

  @Field(() => DiscountPure, { nullable: true })
  discount_2?: DiscountPure;

  @Field(() => InvoiceHistoryPure)
  invoiceHistory: InvoiceHistoryPure;

  @Field(() => InvoicePure)
  invoice: InvoicePure;

  @Field(() => InvoiceProductPure, { nullable: true })
  invoiceProduct?: InvoiceProductPure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;

  @Field(() => ProductPure, { nullable: true })
  relatedProduct?: ProductPure;

  @Field(() => SubproductPure, { nullable: true })
  relatedSubproduct?: SubproductPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;
}

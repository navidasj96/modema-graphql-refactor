import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { CarpetUsagePlaceInvoiceProductPure } from '@/modules/carpet-usage-place-invoice-product/domain/carpet-usage-place-invoice-product.pure';
import { DesignPure } from '@/modules/design/domain/design.pure';
import { DiscountPure } from '@/modules/discount/domain/discount.pure';
import { InvoiceProductHistoryPure } from '@/modules/invoice-product-history/domain/invoice-product-history.pure';
import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { InvoiceReversalItemPure } from '@/modules/invoice-reversal-item/domain/invoice-reversal-item.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { ReturnedInvoiceProductPure } from '@/modules/returned-invoice-product/domain/returned-invoice-product.pure';
import { SubproductStockHistoryPure } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';

@InputType('InvoiceProductPureDomain')
@ObjectType()
export class InvoiceProductPure {
  @Field(() => ID)
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

  @Field(() => [CarpetUsagePlaceInvoiceProductPure], { nullable: true })
  carpetUsagePlaceInvoiceProducts?: CarpetUsagePlaceInvoiceProductPure[];

  @Field(() => [InvoiceProductHistoryPure], { nullable: true })
  invoiceProductHistories?: InvoiceProductHistoryPure[];

  @Field(() => [InvoiceProductItemPure], { nullable: true })
  invoiceProductItems?: InvoiceProductItemPure[];

  @Field(() => DesignPure, { nullable: true })
  design?: DesignPure;

  @Field(() => DiscountPure, { nullable: true })
  discount_2?: DiscountPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => SubproductPure, { nullable: true })
  pad?: SubproductPure;

  @Field(() => ProductPure, { nullable: true })
  product?: ProductPure;

  @Field(() => ProductPure, { nullable: true })
  relatedProduct?: ProductPure;

  @Field(() => SubproductPure, { nullable: true })
  relatedSubproduct?: SubproductPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;

  @Field(() => [InvoiceReversalItemPure], { nullable: true })
  invoiceReversalItems?: InvoiceReversalItemPure[];

  @Field(() => [ReturnRequestItemHistoryPure], { nullable: true })
  returnRequestItemHistories?: ReturnRequestItemHistoryPure[];

  @Field(() => [ReturnRequestItemPure], { nullable: true })
  returnRequestItems?: ReturnRequestItemPure[];

  @Field(() => [ReturnedInvoiceProductPure], { nullable: true })
  returnedInvoiceProducts?: ReturnedInvoiceProductPure[];

  @Field(() => [SubproductStockHistoryPure], { nullable: true })
  subproductStockHistories?: SubproductStockHistoryPure[];
}

import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { CarpetUsagePlaceInvoiceProduct } from '@/modules/carpet-usage-place-invoice-product/domain/carpet-usage-place-invoice-product';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';
import { Design } from '@/modules/design/domain/design';
import { Discount } from '@/modules/discount/domain/discount';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { Product } from '@/modules/product/domain/product';
import { InvoiceReversalItem } from '@/modules/invoice-reversal-item/domain/invoice-reversal-item';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/domain/returned-invoice-product';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';

@InputType('InvoiceProductDomain')
@FilterableUnPagedRelation(
  'carpetUsagePlaceInvoiceProducts',
  () => CarpetUsagePlaceInvoiceProduct
)
@FilterableUnPagedRelation(
  'invoiceProductHistories',
  () => InvoiceProductHistory
)
@FilterableUnPagedRelation('invoiceProductItems', () => InvoiceProductItem)
@FilterableRelation('design', () => Design)
@FilterableRelation('discount_2', () => Discount, { nullable: true })
@FilterableRelation('invoice', () => Invoice)
@FilterableRelation('pad', () => Subproduct)
@FilterableRelation('product', () => Product)
@FilterableRelation('relatedProduct', () => Product)
@FilterableRelation('relatedSubproduct', () => Subproduct, { nullable: true })
@FilterableRelation('subproduct', () => Subproduct)
@FilterableUnPagedRelation('invoiceReversalItems', () => InvoiceReversalItem)
@FilterableUnPagedRelation(
  'returnRequestItemHistories',
  () => ReturnRequestItemHistory
)
@FilterableUnPagedRelation('returnRequestItems', () => ReturnRequestItem)
@FilterableUnPagedRelation(
  'returnedInvoiceProducts',
  () => ReturnedInvoiceProduct
)
@FilterableUnPagedRelation(
  'subproductStockHistories',
  () => SubproductStockHistory
)
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
})
@ObjectType()
export class InvoiceProduct {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  invoiceId: number;

  @FilterableField({ nullable: true })
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

  @Field(() => [CarpetUsagePlaceInvoiceProduct], { nullable: true })
  carpetUsagePlaceInvoiceProducts?: CarpetUsagePlaceInvoiceProduct[];

  @Field(() => [InvoiceProductHistory], { nullable: true })
  invoiceProductHistories?: InvoiceProductHistory[];

  @Field(() => [InvoiceProductItem], { nullable: true })
  invoiceProductItems?: InvoiceProductItem[];

  @Field(() => Design, { nullable: true })
  design?: Design;

  @Field(() => Discount, { nullable: true })
  discount_2?: Discount;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => Subproduct, { nullable: true })
  pad?: Subproduct;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => Product, { nullable: true })
  relatedProduct?: Product;

  @Field(() => Subproduct, { nullable: true })
  relatedSubproduct?: Subproduct;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;

  @Field(() => [InvoiceReversalItem], { nullable: true })
  invoiceReversalItems?: InvoiceReversalItem[];

  @Field(() => [ReturnRequestItemHistory], { nullable: true })
  returnRequestItemHistories?: ReturnRequestItemHistory[];

  @Field(() => [ReturnRequestItem], { nullable: true })
  returnRequestItems?: ReturnRequestItem[];

  @Field(() => [ReturnedInvoiceProduct], { nullable: true })
  returnedInvoiceProducts?: ReturnedInvoiceProduct[];

  @Field(() => [SubproductStockHistory], { nullable: true })
  subproductStockHistories?: SubproductStockHistory[];
}

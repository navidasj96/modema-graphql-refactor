import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { Product } from '@/modules/product/domain/product';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';
import { Discount } from '@/modules/discount/domain/discount';
import { Design } from '@/modules/design/domain/design';

@InputType('InvoiceProductHistoryDomain')
@ObjectType()
export class InvoiceProductHistory {
  @IDField(() => ID)
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
  price: string;

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

  @Field(() => Design, { nullable: true })
  design?: Design;

  @Field(() => Discount, { nullable: true })
  discount_2?: Discount;

  @Field(() => InvoiceHistory)
  invoiceHistory: InvoiceHistory;

  @Field(() => Invoice)
  invoice: Invoice;

  @Field(() => InvoiceProduct, { nullable: true })
  invoiceProduct?: InvoiceProduct;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => Product, { nullable: true })
  relatedProduct?: Product;

  @Field(() => Subproduct, { nullable: true })
  relatedSubproduct?: Subproduct;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;
}

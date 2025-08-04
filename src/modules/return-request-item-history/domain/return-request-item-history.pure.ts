import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { ReturnItemStatusPure } from '@/modules/return-item-status/domain/return-item-status.pure';
import { ReturnReasonPure } from '@/modules/return-reason/domain/return-reason.pure';
import { ReturnRequestHistoryPure } from '@/modules/return-request-history/domain/return-request-history.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnRequestItemHistoryPureDomain')
@ObjectType()
export class ReturnRequestItemHistoryPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  returnRequestHistoryId?: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  returnRequestId: number;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  rowNo?: number;

  @Field()
  productId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  invoiceProductId?: number;

  @Field()
  count: number;

  @Field({ nullable: true })
  returnItemStatusId?: number;

  @Field({ nullable: true })
  returnReasonId?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  descriptionSales?: string;

  @Field({ nullable: true })
  descriptionFactory?: string;

  @Field({ nullable: true })
  descriptionAccounting?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ReturnRequestHistoryPure)
  returnRequestHistory: ReturnRequestHistoryPure;

  @Field(() => InvoiceProductPure, { nullable: true })
  invoiceProduct?: InvoiceProductPure;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => ReturnItemStatusPure, { nullable: true })
  returnItemStatus?: ReturnItemStatusPure;

  @Field(() => ReturnReasonPure, { nullable: true })
  returnReason?: ReturnReasonPure;

  @Field(() => ReturnRequestPure)
  returnRequest: ReturnRequestPure;

  @Field(() => ReturnRequestItemPure)
  returnRequestItem: ReturnRequestItemPure;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}

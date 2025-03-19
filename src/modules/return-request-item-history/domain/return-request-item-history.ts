import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { Product } from '@/modules/product/domain/product';
import { ReturnItemStatus } from '@/modules/return-item-status/domain/return-item-status';
import { ReturnReason } from '@/modules/return-reason/domain/return-reason';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@ObjectType()
export class ReturnRequestItemHistory {
  @IDField(() => ID)
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

  @Field(() => ReturnRequestHistory)
  returnRequestHistory: ReturnRequestHistory;

  @Field(() => InvoiceProduct, { nullable: true })
  invoiceProduct?: InvoiceProduct;

  @Field(() => Product)
  product: Product;

  @Field(() => ReturnItemStatus, { nullable: true })
  returnItemStatus?: ReturnItemStatus;

  @Field(() => ReturnReason, { nullable: true })
  returnReason?: ReturnReason;

  @Field(() => ReturnRequest)
  returnRequest: ReturnRequest;

  @Field(() => ReturnRequestItem)
  returnRequestItem: ReturnRequestItem;

  @Field(() => Subproduct)
  subproduct: Subproduct;
  s;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/domain/return-request-item-image';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status';
import { ReturnRequestItemVideo } from '@/modules/return-request-item-video/domain/return-request-item-video';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { Product } from '@/modules/product/domain/product';
import { ReturnItemStatus } from '@/modules/return-item-status/domain/return-item-status';
import { ReturnReason } from '@/modules/return-reason/domain/return-reason';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@ObjectType()
export class ReturnRequestItem {
  @IDField(() => ID)
  id: number;

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

  @Field(() => [ReturnItemStatusReturnRequestItem])
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItem[];

  @Field(() => [ReturnRequestItemHistory])
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @Field(() => [ReturnRequestItemImage])
  returnRequestItemImages: ReturnRequestItemImage[];

  @Field(() => [ReturnRequestItemReturnItemStatus])
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatus[];

  @Field(() => [ReturnRequestItemVideo])
  returnRequestItemVideos: ReturnRequestItemVideo[];

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

  @Field(() => Subproduct)
  subproduct: Subproduct;
}

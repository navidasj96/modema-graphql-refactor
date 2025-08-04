import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { ReturnItemStatusReturnRequestItemPure } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item.pure';
import { ReturnItemStatusPure } from '@/modules/return-item-status/domain/return-item-status.pure';
import { ReturnReasonPure } from '@/modules/return-reason/domain/return-reason.pure';
import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestItemImagePure } from '@/modules/return-request-item-image/domain/return-request-item-image.pure';
import { ReturnRequestItemReturnItemStatusPure } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status.pure';
import { ReturnRequestItemVideoPure } from '@/modules/return-request-item-video/domain/return-request-item-video.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('ReturnRequestItemPureDomain')
@ObjectType()
export class ReturnRequestItemPure {
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

  @Field(() => [ReturnItemStatusReturnRequestItemPure])
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItemPure[];

  @Field(() => [ReturnRequestItemHistoryPure])
  returnRequestItemHistories: ReturnRequestItemHistoryPure[];

  @Field(() => [ReturnRequestItemImagePure])
  returnRequestItemImages: ReturnRequestItemImagePure[];

  @Field(() => [ReturnRequestItemReturnItemStatusPure])
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatusPure[];

  @Field(() => [ReturnRequestItemVideoPure])
  returnRequestItemVideos: ReturnRequestItemVideoPure[];

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

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}

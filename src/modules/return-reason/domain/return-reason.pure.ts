import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { ReturnedInvoicePure } from '@/modules/returned-invoice/domain/returned-invoice.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnReasonPureDomain')
@ObjectType()
export class ReturnReasonPure {
  @Field(() => ID)
  id: number;

  @Field()
  reason: string;

  @Field()
  sortOrder: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnRequestItemHistoryPure])
  returnRequestItemHistories: ReturnRequestItemHistoryPure[];

  @Field(() => [ReturnRequestItemPure])
  returnRequestItems: ReturnRequestItemPure[];

  @Field(() => [ReturnedInvoicePure])
  returnedInvoices: ReturnedInvoicePure[];
}

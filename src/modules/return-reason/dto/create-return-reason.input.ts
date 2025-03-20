import { Field, InputType } from '@nestjs/graphql';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { ReturnedInvoice } from '@/modules/returned-invoice/domain/returned-invoice';

@InputType('CreateReturnReasonInput')
export class CreateReturnReasonInput {
  @Field()
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

  @Field(() => [ReturnRequestItemHistory])
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @Field(() => [ReturnRequestItem])
  returnRequestItems: ReturnRequestItem[];

  @Field(() => [ReturnedInvoice])
  returnedInvoices: ReturnedInvoice[];
}

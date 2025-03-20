import { Field, InputType } from '@nestjs/graphql';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';

@InputType('CreateReturnItemStatusInput')
export class CreateReturnItemStatusInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  stepTest?: number;

  @Field({ nullable: true })
  stepGuarantee?: number;

  @Field()
  sortOrder: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnItemStatusReturnRequestItem])
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItem[];

  @Field(() => [ReturnRequestItemHistory])
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @Field(() => [ReturnRequestItemReturnItemStatus])
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatus[];

  @Field(() => [ReturnRequestItem])
  returnRequestItems: ReturnRequestItem[];
}

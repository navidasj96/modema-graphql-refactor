import { ReturnItemStatusReturnRequestItemPure } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item.pure';
import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestItemReturnItemStatusPure } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnItemStatusPureDomain')
@ObjectType()
export class ReturnItemStatusPure {
  @Field(() => ID)
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

  @Field(() => [ReturnItemStatusReturnRequestItemPure])
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItemPure[];

  @Field(() => [ReturnRequestItemHistoryPure])
  returnRequestItemHistories: ReturnRequestItemHistoryPure[];

  @Field(() => [ReturnRequestItemReturnItemStatusPure])
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatusPure[];

  @Field(() => [ReturnRequestItemPure])
  returnRequestItems: ReturnRequestItemPure[];
}

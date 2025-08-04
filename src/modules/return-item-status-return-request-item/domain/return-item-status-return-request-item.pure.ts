import { ReturnItemStatusPure } from '@/modules/return-item-status/domain/return-item-status.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnItemStatusReturnRequestItemPureDomain')
@ObjectType()
export class ReturnItemStatusReturnRequestItemPure {
  @Field(() => ID)
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  returnItemStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ReturnRequestItemPure)
  returnRequestItem: ReturnRequestItemPure;

  @Field(() => ReturnItemStatusPure)
  returnItemStatus: ReturnItemStatusPure;

  @Field(() => UserPure)
  user: UserPure;
}

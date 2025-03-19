import { Field, InputType } from '@nestjs/graphql';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { ReturnItemStatus } from '@/modules/return-item-status/domain/return-item-status';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateReturnItemStatusReturnRequestItemInput {
  @Field()
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

  @Field(() => ReturnRequestItem)
  returnRequestItem: ReturnRequestItem;

  @Field(() => ReturnItemStatus)
  returnItemStatus: ReturnItemStatus;

  @Field(() => User)
  user: User;
}

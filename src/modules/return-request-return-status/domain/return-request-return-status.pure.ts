import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { ReturnStatusPure } from '@/modules/return-status/domain/return-status.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnRequestReturnStatusPureDomain')
@ObjectType()
export class ReturnRequestReturnStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  returnRequestId: number;

  @Field()
  returnStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ReturnRequestPure)
  returnRequest: ReturnRequestPure;

  @Field(() => ReturnStatusPure)
  returnStatus: ReturnStatusPure;

  @Field(() => UserPure)
  user: UserPure;
}

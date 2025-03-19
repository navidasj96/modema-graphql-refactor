import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { ReturnStatus } from '@/modules/return-status/domain/return-status';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class ReturnRequestReturnStatus {
  @IDField(() => ID)
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

  @Field(() => ReturnRequest)
  returnRequest: ReturnRequest;

  @Field(() => ReturnStatus)
  returnStatus: ReturnStatus;

  @Field(() => User)
  user: User;
}

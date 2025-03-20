import { Field, InputType } from '@nestjs/graphql';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { ReturnStatus } from '@/modules/return-status/domain/return-status';
import { User } from '@/modules/user/domain/user';

@InputType('CreateReturnRequestReturnStatusInput')
export class CreateReturnRequestReturnStatusInput {
  @Field()
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

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { WithdrawalRequest } from '@/modules/withdrawal-request/domain/withdrawal-request';

@ObjectType()
export class WithdrawalRequestStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [WithdrawalRequest])
  withdrawalRequests: WithdrawalRequest[];
}

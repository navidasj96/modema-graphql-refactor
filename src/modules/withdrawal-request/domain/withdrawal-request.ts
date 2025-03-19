import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { WithdrawalRequestStatus } from '@/modules/withdrawal-request-status/domain/withdrawal-request-status';

@ObjectType()
export class WithdrawalRequest {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  withdrawalRequestStatusId: number;

  @Field()
  amount: string;

  @Field()
  name: string;

  @Field()
  cardNo: string;

  @Field({ nullable: true })
  moneyTransferRefCode?: string;

  @Field({ nullable: true })
  moneyTransferFromBank?: string;

  @Field({ nullable: true })
  confirmedBy?: number;

  @Field({ nullable: true })
  confirmedAt?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User)
  user: User;

  @Field(() => WithdrawalRequestStatus)
  withdrawalRequestStatus: WithdrawalRequestStatus;
}

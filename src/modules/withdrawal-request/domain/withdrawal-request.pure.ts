import { UserPure } from '@/modules/user/domain/user.pure';
import { WithdrawalRequestStatusPure } from '@/modules/withdrawal-request-status/domain/withdrawal-request-status.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('WithdrawalRequestPureDomain')
@ObjectType()
export class WithdrawalRequestPure {
  @Field(() => ID)
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

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => WithdrawalRequestStatusPure)
  withdrawalRequestStatus: WithdrawalRequestStatusPure;
}

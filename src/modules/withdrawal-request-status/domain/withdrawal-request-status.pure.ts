import { WithdrawalRequestPure } from '@/modules/withdrawal-request/domain/withdrawal-request.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('WithdrawalRequestStatusPureDomain')
@ObjectType()
export class WithdrawalRequestStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [WithdrawalRequestPure])
  withdrawalRequests: WithdrawalRequestPure[];
}

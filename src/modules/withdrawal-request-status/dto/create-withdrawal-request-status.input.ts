import { Field, InputType } from '@nestjs/graphql';
import { WithdrawalRequest } from '@/modules/withdrawal-request/domain/withdrawal-request';

@InputType()
export class CreateWithdrawalRequestStatusInput {
  @Field()
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

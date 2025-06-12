import { CreateWithdrawalRequestStatusInput } from './create-withdrawal-request-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWithdrawalRequestStatusInput extends PartialType(
  CreateWithdrawalRequestStatusInput
) {
  @Field(() => Int)
  id: number;
}

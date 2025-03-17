import { CreateWithdrawalRequestInput } from './create-withdrawal-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWithdrawalRequestInput extends PartialType(CreateWithdrawalRequestInput) {
  @Field(() => Int)
  id: number;
}

import { CreateWalletHistoryInput } from './create-wallet-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWalletHistoryInput extends PartialType(CreateWalletHistoryInput) {
  @Field(() => Int)
  id: number;
}

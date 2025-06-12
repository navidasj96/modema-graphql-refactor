import { CreateWalletGiftChargeInput } from './create-wallet-gift-charge.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWalletGiftChargeInput extends PartialType(
  CreateWalletGiftChargeInput
) {
  @Field(() => Int)
  id: number;
}

import { CreateRetargetingWalletChargeInput } from './create-retargeting-wallet-charge.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRetargetingWalletChargeInput extends PartialType(CreateRetargetingWalletChargeInput) {
  @Field(() => Int)
  id: number;
}

import { CreateWalletInput } from './create-wallet.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWalletInput extends PartialType(CreateWalletInput) {
  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;
}

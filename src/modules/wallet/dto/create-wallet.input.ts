import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateWalletInputs')
export class CreateWalletInput {
  @Field()
  userId: number;

  @Field()
  modemaBlocked: number;

  @Field()
  userBlocked: number;

  @Field()
  withdrawable: number;

  @Field()
  notUsableForLowTotalPrices: number;
}

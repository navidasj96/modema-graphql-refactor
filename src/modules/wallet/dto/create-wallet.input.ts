import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWalletInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  modemaBlocked: string;

  @Field()
  userBlocked: string;

  @Field()
  withdrawable: string;

  @Field()
  notUsableForLowTotalPrices: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

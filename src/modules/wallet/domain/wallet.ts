import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Wallet {
  @IDField(() => ID)
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

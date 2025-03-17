import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWithdrawalRequestInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  withdrawalRequestStatusId: number;

  @Field()
  amount: string;

  @Field()
  name: string;

  @Field()
  cardNo: string;

  @Field({ nullable: true })
  moneyTransferRefCode?: string;

  @Field({ nullable: true })
  moneyTransferFromBank?: string;

  @Field({ nullable: true })
  confirmedBy?: number;

  @Field({ nullable: true })
  confirmedAt?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

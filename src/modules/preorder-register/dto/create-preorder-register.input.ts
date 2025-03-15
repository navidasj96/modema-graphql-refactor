import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePreorderRegisterInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  isPaid: boolean;

  @Field({ nullable: true })
  preorderNumber?: string;

  @Field({ nullable: true })
  preorderDate?: Date;

  @Field()
  paymentAmount: string;

  @Field()
  withdrawnAmount: string;

  @Field({ nullable: true })
  refId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field({ nullable: true })
  saleRefId?: string;

  @Field({ nullable: true })
  paymentTypeId?: number;

  @Field()
  isConfirmed: boolean;

  @Field({ nullable: true })
  moneyTransferRefCode?: string;

  @Field({ nullable: true })
  refCodeSales?: string;

  @Field({ nullable: true })
  moneyTransferConfirmedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

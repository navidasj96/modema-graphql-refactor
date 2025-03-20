import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { InvoiceBankGatewayHistory } from '@/modules/invoice-bank-gateway-history/domain/invoice-bank-gateway-history';
import { User } from '@/modules/user/domain/user';
import { InvoicePaymentType } from '@/modules/invoice-payment-type/domain/invoice-payment-type';

@InputType('PreorderRegisterDomain')
@ObjectType()
export class PreorderRegister {
  @IDField(() => ID)
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

  @Field(() => [InvoiceBankGatewayHistory])
  invoiceBankGatewayHistories: InvoiceBankGatewayHistory[];

  @Field(() => User, { nullable: true })
  moneyTransferConfirmedBy2?: User;

  @Field(() => InvoicePaymentType, { nullable: true })
  paymentType?: InvoicePaymentType;

  @Field(() => User)
  user: User;
}

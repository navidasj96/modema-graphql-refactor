import { InvoiceBankGatewayHistoryPure } from '@/modules/invoice-bank-gateway-history/domain/invoice-bank-gateway-history.pure';
import { InvoicePaymentTypePure } from '@/modules/invoice-payment-type/domain/invoice-payment-type.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PreorderRegisterPureDomain')
@ObjectType()
export class PreorderRegisterPure {
  @Field(() => ID)
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

  @Field(() => [InvoiceBankGatewayHistoryPure])
  invoiceBankGatewayHistories: InvoiceBankGatewayHistoryPure[];

  @Field(() => UserPure, { nullable: true })
  moneyTransferConfirmedBy2?: UserPure;

  @Field(() => InvoicePaymentTypePure, { nullable: true })
  paymentType?: InvoicePaymentTypePure;

  @Field(() => UserPure)
  user: UserPure;
}

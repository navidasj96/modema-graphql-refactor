import { InvoiceHistoryPure } from '@/modules/invoice-history/domain/invoice-history.pure';
import { InvoicePaymentTypePure } from '@/modules/invoice-payment-type/domain/invoice-payment-type.pure';
import { InvoicePaymentPure } from '@/modules/invoice-payment/domain/invoice-payment.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoicePaymentHistoryPureDomain')
@ObjectType()
export class InvoicePaymentHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  invoicePaymentId: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  invoiceHistoryId?: number;

  @Field()
  invoicePaymentTypeId: number;

  @Field()
  amount: string;

  @Field({ nullable: true })
  forShipping?: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  refCode?: string;

  @Field({ nullable: true })
  chequeNumber?: string;

  @Field({ nullable: true })
  chequeBank?: string;

  @Field({ nullable: true })
  chequeDate?: string;

  @Field({ nullable: true })
  chequePayee?: string;

  @Field({ nullable: true })
  isConfirmed?: number;

  @Field({ nullable: true })
  refCodeSales?: string;

  @Field({ nullable: true })
  confirmedBy?: number;

  @Field({ nullable: true })
  paymentDate?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure, { nullable: true })
  confirmedBy2?: UserPure;

  @Field(() => InvoiceHistoryPure, { nullable: true })
  invoiceHistory?: InvoiceHistoryPure;

  @Field(() => InvoicePure)
  invoice: InvoicePure;

  @Field(() => InvoicePaymentPure)
  invoicePayment: InvoicePaymentPure;

  @Field(() => InvoicePaymentTypePure)
  invoicePaymentType: InvoicePaymentTypePure;

  @Field(() => UserPure)
  user: UserPure;
}

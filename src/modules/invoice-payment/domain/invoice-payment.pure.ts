import { InvoicePaymentHistoryPure } from '@/modules/invoice-payment-history/domain/invoice-payment-history.pure';
import { InvoicePaymentTypePure } from '@/modules/invoice-payment-type/domain/invoice-payment-type.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoicePaymentPureDomain')
@ObjectType()
export class InvoicePaymentPure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  invoicePaymentTypeId: number;

  @Field()
  amount: number;

  @Field()
  forShipping: boolean;

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
  isConfirmed?: boolean;

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

  @Field(() => [InvoicePaymentHistoryPure], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistoryPure[];

  @Field(() => UserPure, { nullable: true })
  confirmedBy2?: UserPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => InvoicePaymentTypePure, { nullable: true })
  invoicePaymentType?: InvoicePaymentTypePure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}

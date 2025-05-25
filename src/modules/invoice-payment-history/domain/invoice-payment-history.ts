import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { InvoicePayment } from '@/modules/invoice-payment/domain/invoice-payment';
import { InvoicePaymentType } from '@/modules/invoice-payment-type/domain/invoice-payment-type';

@InputType('InvoicePaymentHistoryDomain')
@UnPagedRelation('invoice', () => Invoice)
@UnPagedRelation('invoiceHistory', () => InvoiceHistory)
@UnPagedRelation('invoicePayment', () => InvoicePayment)
@UnPagedRelation('invoicePaymentType', () => InvoicePaymentType)
@ObjectType()
export class InvoicePaymentHistory {
  @IDField(() => ID)
  id: number;

  @Field()
  invoicePaymentId: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  invoiceHistoryId?: number;

  @FilterableField()
  invoicePaymentTypeId: number;

  @FilterableField()
  amount: string;

  @FilterableField({ nullable: true })
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

  @FilterableField({ nullable: true })
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

  @Field(() => User, { nullable: true })
  confirmedBy2?: User;

  @Field(() => InvoiceHistory, { nullable: true })
  invoiceHistory?: InvoiceHistory;

  @Field(() => Invoice)
  invoice: Invoice;

  @Field(() => InvoicePayment)
  invoicePayment: InvoicePayment;

  @Field(() => InvoicePaymentType)
  invoicePaymentType: InvoicePaymentType;

  @Field(() => User)
  user: User;
}

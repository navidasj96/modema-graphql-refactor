import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { InvoicePaymentType } from '@/modules/invoice-payment-type/domain/invoice-payment-type';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/domain/invoice-payment-history';

@InputType('CreateInvoicePaymentInput')
export class CreateInvoicePaymentInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  invoicePaymentTypeId: number;

  @Field()
  amount: string;

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

  @Field(() => [InvoicePaymentHistory], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistory[];

  @Field(() => User, { nullable: true })
  confirmedBy2?: User;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => InvoicePaymentType, { nullable: true })
  invoicePaymentType?: InvoicePaymentType;

  @Field(() => User, { nullable: true })
  user?: User;
}

import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { InvoiceInvoiceStatusPure } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status.pure';
import { InvoiceReversalPure } from '@/modules/invoice-reversal/domain/invoice-reversal.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';

@InputType('InvoiceStatusPureDomain')
@ObjectType()
export class InvoiceStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  notificationNumbers?: string;

  @Field({ nullable: true })
  notificationEmails?: string;

  @Field({ nullable: true })
  smsToCustomer?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoiceInvoiceStatusPure], { nullable: true })
  invoiceInvoiceStatuses?: InvoiceInvoiceStatusPure[];

  @Field(() => [InvoiceReversalPure], { nullable: true })
  invoiceReversals?: InvoiceReversalPure[];

  @Field(() => [InvoicePure], { nullable: true })
  invoices?: InvoicePure[];

  @Field(() => [InvoicePure], { nullable: true })
  invoices2?: InvoicePure[];
}

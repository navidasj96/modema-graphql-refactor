import { Field, InputType } from '@nestjs/graphql';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status';
import { InvoiceReversal } from '@/modules/invoice-reversal/domain/invoice-reversal';
import { Invoice } from '@/modules/invoice/domain/invoice';

@InputType('CreateInvoiceStatusInput')
export class CreateInvoiceStatusInput {
  @Field()
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

  @Field(() => [InvoiceInvoiceStatus], { nullable: true })
  invoiceInvoiceStatuses?: InvoiceInvoiceStatus[];

  @Field(() => [InvoiceReversal], { nullable: true })
  invoiceReversals?: InvoiceReversal[];

  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];

  @Field(() => [Invoice], { nullable: true })
  invoices2?: Invoice[];
}

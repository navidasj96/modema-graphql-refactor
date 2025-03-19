import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { InvoiceStatus } from '@/modules/invoice-status/domain/invoice-status';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateInvoiceInvoiceStatusInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  invoiceStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  comment?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => InvoiceStatus, { nullable: true })
  invoiceStatus?: InvoiceStatus;

  @Field(() => User, { nullable: true })
  user?: User;
}

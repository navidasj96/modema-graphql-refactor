import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { InvoiceReversalItem } from '@/modules/invoice-reversal-item/domain/invoice-reversal-item';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { InvoiceStatus } from '@/modules/invoice-status/domain/invoice-status';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class InvoiceReversal {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  wholeInvoice: boolean;

  @Field()
  invoiceStatusId: number;

  @Field()
  isReviewed: boolean;

  @Field({ nullable: true })
  reviewedBy?: number;

  @Field({ nullable: true })
  reviewedDate?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoiceReversalItem], { nullable: true })
  invoiceReversalItems?: InvoiceReversalItem[];

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => InvoiceStatus, { nullable: true })
  invoiceStatus?: InvoiceStatus;

  @Field(() => User, { nullable: true })
  reviewedBy2?: User;
}

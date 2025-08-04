import { InvoiceReversalItemPure } from '@/modules/invoice-reversal-item/domain/invoice-reversal-item.pure';
import { InvoiceStatusPure } from '@/modules/invoice-status/domain/invoice-status.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceReversalPureDomain')
@ObjectType()
export class InvoiceReversalPure {
  @Field(() => ID)
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

  @Field(() => [InvoiceReversalItemPure], { nullable: true })
  invoiceReversalItems?: InvoiceReversalItemPure[];

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => InvoiceStatusPure, { nullable: true })
  invoiceStatus?: InvoiceStatusPure;

  @Field(() => UserPure, { nullable: true })
  reviewedBy2?: UserPure;
}

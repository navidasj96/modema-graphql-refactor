import { InvoiceStatusPure } from '@/modules/invoice-status/domain/invoice-status.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceInvoiceStatusPureDomain')
@ObjectType()
export class InvoiceInvoiceStatusPure {
  @Field(() => ID)
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

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => InvoiceStatusPure, { nullable: true })
  invoiceStatus?: InvoiceStatusPure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}

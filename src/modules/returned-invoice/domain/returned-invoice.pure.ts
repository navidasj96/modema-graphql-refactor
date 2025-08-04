import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ReturnReasonPure } from '@/modules/return-reason/domain/return-reason.pure';
import { ReturnedInvoiceProductPure } from '@/modules/returned-invoice-product/domain/returned-invoice-product.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnedInvoicePureDomain')
@ObjectType()
export class ReturnedInvoicePure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  replacementInvoiceId?: number;

  @Field({ nullable: true })
  returnReasonId?: number;

  @Field({ nullable: true })
  returnDate?: Date;

  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  snappInformed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnedInvoiceProductPure])
  returnedInvoiceProducts: ReturnedInvoiceProductPure[];

  @Field(() => InvoicePure)
  invoice: InvoicePure;

  @Field(() => InvoicePure, { nullable: true })
  replacementInvoice?: InvoicePure;

  @Field(() => ReturnReasonPure, { nullable: true })
  returnReason?: ReturnReasonPure;

  @Field(() => UserPure)
  user: UserPure;
}

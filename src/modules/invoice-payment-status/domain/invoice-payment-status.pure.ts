import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';

@InputType('InvoicePaymentStatusPureDomain')
@ObjectType()
export class InvoicePaymentStatusPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoicePure], { nullable: true })
  invoices?: InvoicePure[];

  @Field(() => [InvoicePure], { nullable: true })
  invoices2?: InvoicePure[];
}

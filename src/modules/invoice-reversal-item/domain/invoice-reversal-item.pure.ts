import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { InvoiceReversalPure } from '@/modules/invoice-reversal/domain/invoice-reversal.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceReversalItemPureDomain')
@ObjectType()
export class InvoiceReversalItemPure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceReversalId: number;

  @Field()
  invoiceProductId: number;

  @Field()
  withPad: boolean;

  @Field()
  count: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => InvoiceProductPure, { nullable: true })
  invoiceProduct?: InvoiceProductPure;

  @Field(() => InvoiceReversalPure, { nullable: true })
  invoiceReversal?: InvoiceReversalPure;
}

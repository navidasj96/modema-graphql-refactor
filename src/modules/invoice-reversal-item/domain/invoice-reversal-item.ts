import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { InvoiceReversal } from '@/modules/invoice-reversal/domain/invoice-reversal';

@InputType('InvoiceReversalItemDomain')
@ObjectType()
export class InvoiceReversalItem {
  @IDField(() => ID)
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

  @Field(() => InvoiceProduct, { nullable: true })
  invoiceProduct?: InvoiceProduct;

  @Field(() => InvoiceReversal, { nullable: true })
  invoiceReversal?: InvoiceReversal;
}

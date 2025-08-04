import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { NegotiationPure } from '@/modules/negotiation/domain/negotiation.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceNegotiationPureDomain')
@ObjectType()
export class InvoiceNegotiationPure {
  @Field(() => ID)
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => NegotiationPure, { nullable: true })
  negotiation?: NegotiationPure;
}

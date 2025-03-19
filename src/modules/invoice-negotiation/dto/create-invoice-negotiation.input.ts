import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';

@InputType()
export class CreateInvoiceNegotiationInput {
  @Field()
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => Negotiation, { nullable: true })
  negotiation?: Negotiation;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';

@ObjectType()
export class InvoiceNegotiation {
  @IDField(() => ID)
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

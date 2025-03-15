import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceRatesResult {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  addressId: number;

  @Field({ nullable: true })
  shippingServiceId?: number;

  @Field({ nullable: true })
  ratesReplyResult?: string;

  @Field({ nullable: true })
  ratesReplyCodResult?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

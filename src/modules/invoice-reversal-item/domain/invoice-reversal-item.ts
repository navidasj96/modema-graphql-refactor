import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}

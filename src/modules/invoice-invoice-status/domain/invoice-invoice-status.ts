import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceInvoiceStatus {
  @IDField(() => ID)
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
}

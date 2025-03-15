import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceReversal {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  wholeInvoice: boolean;

  @Field()
  invoiceStatusId: number;

  @Field()
  isReviewed: boolean;

  @Field({ nullable: true })
  reviewedBy?: number;

  @Field({ nullable: true })
  reviewedDate?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

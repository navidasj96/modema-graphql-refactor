import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ReturnedInvoice {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  replacementInvoiceId?: number;

  @Field({ nullable: true })
  returnReasonId?: number;

  @Field({ nullable: true })
  returnDate?: Date;

  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  snappInformed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

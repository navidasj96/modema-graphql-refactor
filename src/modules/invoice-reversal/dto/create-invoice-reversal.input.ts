import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceReversalInput {
  @Field()
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

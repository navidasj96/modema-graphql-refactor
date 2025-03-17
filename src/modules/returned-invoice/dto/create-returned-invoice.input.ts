import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnedInvoiceInput {
  @Field()
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

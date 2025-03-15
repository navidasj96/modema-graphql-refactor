import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceInvoiceStatusInput {
  @Field()
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

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceProductItemInvoiceProductStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceProductItemId: number;

  @Field()
  invoiceProductStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ReturnedInvoiceProduct {
  @IDField(() => ID)
  id: number;

  @Field()
  returnedInvoiceId: number;

  @Field()
  invoiceProductId: number;

  @Field()
  productId: number;

  @Field()
  subproductId: number;

  @Field()
  count: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

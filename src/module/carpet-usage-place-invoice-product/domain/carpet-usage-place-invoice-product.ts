import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CarpetUsagePlaceInvoiceProduct {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceProductId: number;

  @Field()
  carpetUsagePlaceId: number;

  @Field()
  row: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceShippingRate {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  shippingServiceId: number;

  @Field()
  shippingRate: string;

  @Field({ nullable: true })
  shippingRateCod?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

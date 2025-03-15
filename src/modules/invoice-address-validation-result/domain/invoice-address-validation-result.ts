import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceAddressValidationResult {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  addressId: number;

  @Field()
  addressValidationResult: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

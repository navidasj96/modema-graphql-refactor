import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarpetUsagePlaceInvoiceProductInput {
  @Field()
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

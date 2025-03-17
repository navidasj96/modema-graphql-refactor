import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSubproductStockHistoryInput {
  @Field()
  id: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  invoiceProductId?: number;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  oldValue: number;

  @Field()
  newValue: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

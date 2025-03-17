import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class SubproductStockHistory {
  @IDField(() => ID)
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

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ReturnRequestItem {
  @IDField(() => ID)
  id: number;

  @Field()
  returnRequestId: number;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  rowNo?: number;

  @Field()
  productId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  invoiceProductId?: number;

  @Field()
  count: number;

  @Field({ nullable: true })
  returnItemStatusId?: number;

  @Field({ nullable: true })
  returnReasonId?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  descriptionSales?: string;

  @Field({ nullable: true })
  descriptionFactory?: string;

  @Field({ nullable: true })
  descriptionAccounting?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

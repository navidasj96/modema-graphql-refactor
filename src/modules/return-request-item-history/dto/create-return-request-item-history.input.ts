import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnRequestItemHistoryInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  returnRequestHistoryId?: number;

  @Field()
  returnRequestItemId: number;

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

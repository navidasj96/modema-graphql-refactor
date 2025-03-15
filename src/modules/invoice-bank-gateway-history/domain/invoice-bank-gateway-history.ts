import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceBankGatewayHistory {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  invoiceId?: number;

  @Field({ nullable: true })
  refId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field({ nullable: true })
  saleRefId?: string;

  @Field({ nullable: true })
  amount?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  preorderRegisterId?: number;
}

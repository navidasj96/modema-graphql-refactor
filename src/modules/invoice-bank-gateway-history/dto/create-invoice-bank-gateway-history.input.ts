import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceBankGatewayHistoryInput {
  @Field()
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

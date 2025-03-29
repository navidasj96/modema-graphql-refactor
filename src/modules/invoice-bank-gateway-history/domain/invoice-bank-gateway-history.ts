import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { PreorderRegister } from '@/modules/preorder-register/domain/preorder-register';

@InputType('InvoiceBankGatewayHistoryDomain')
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

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => PreorderRegister, { nullable: true })
  preorderRegister?: PreorderRegister;
}

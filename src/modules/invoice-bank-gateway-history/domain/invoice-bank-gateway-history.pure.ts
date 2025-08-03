import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { PreorderRegisterPure } from '@/modules/preorder-register/domain/preorder-register.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceBankGatewayHistoryPureDomain')
@ObjectType()
export class InvoiceBankGatewayHistoryPure {
  @Field(() => ID)
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

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => PreorderRegisterPure, { nullable: true })
  preorderRegister?: PreorderRegisterPure;
}

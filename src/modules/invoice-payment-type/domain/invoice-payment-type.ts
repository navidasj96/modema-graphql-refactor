import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { InvoicePayment } from '@/modules/invoice-payment/domain/invoice-payment';
import { PreorderRegister } from '@/modules/preorder-register/domain/preorder-register';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/domain/invoice-payment-history';

@InputType('InvoicePaymentTypeDomain')
@ObjectType()
export class InvoicePaymentType {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoicePaymentHistory], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistory[];

  @Field(() => [InvoicePayment], { nullable: true })
  invoicePayments?: InvoicePayment[];

  @Field(() => [PreorderRegister], { nullable: true })
  preorderRegisters?: PreorderRegister[];
}

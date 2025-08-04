import { InvoicePaymentHistoryPure } from '@/modules/invoice-payment-history/domain/invoice-payment-history.pure';
import { InvoicePaymentPure } from '@/modules/invoice-payment/domain/invoice-payment.pure';
import { PreorderRegisterPure } from '@/modules/preorder-register/domain/preorder-register.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoicePaymentTypePureDomain')
@ObjectType()
export class InvoicePaymentTypePure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoicePaymentHistoryPure], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistoryPure[];

  @Field(() => [InvoicePaymentPure], { nullable: true })
  invoicePayments?: InvoicePaymentPure[];

  @Field(() => [PreorderRegisterPure], { nullable: true })
  preorderRegisters?: PreorderRegisterPure[];
}

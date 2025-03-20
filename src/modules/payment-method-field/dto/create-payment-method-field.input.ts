import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { PaymentMethod } from '@/modules/payment-method/domain/payment-method';

@InputType('CreatePaymentMethodFieldInput')
export class CreatePaymentMethodFieldInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  paymentMethodId: number;

  @Field()
  paymentIdentifier: string;

  @Field()
  name: string;

  @Field()
  value: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Invoice)
  invoice: Invoice;

  @Field(() => PaymentMethod)
  paymentMethod: PaymentMethod;
}

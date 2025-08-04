import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { PaymentMethodPure } from '@/modules/payment-method/domain/payment-method.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PaymentMethodFieldPureDomain')
@ObjectType()
export class PaymentMethodFieldPure {
  @Field(() => ID)
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

  @Field(() => InvoicePure)
  invoice: InvoicePure;

  @Field(() => PaymentMethodPure)
  paymentMethod: PaymentMethodPure;
}

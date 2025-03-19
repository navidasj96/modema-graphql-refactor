import { Field, InputType } from '@nestjs/graphql';
import { PaymentMethodField } from '@/modules/payment-method-field/domain/payment-method-field';

@InputType()
export class CreatePaymentMethodInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => [PaymentMethodField])
  paymentMethodFields: PaymentMethodField[];
}

import { PaymentMethodFieldPure } from '@/modules/payment-method-field/domain/payment-method-field.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PaymentMethodPureDomain')
@ObjectType()
export class PaymentMethodPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => [PaymentMethodFieldPure])
  paymentMethodFields: PaymentMethodFieldPure[];
}

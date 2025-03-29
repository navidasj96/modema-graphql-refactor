import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { PaymentMethodField } from '@/modules/payment-method-field/domain/payment-method-field';

@InputType('PaymentMethodDomain')
@ObjectType()
export class PaymentMethod {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => [PaymentMethodField])
  paymentMethodFields: PaymentMethodField[];
}

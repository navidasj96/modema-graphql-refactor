import { Resolver } from '@nestjs/graphql';
import { PaymentMethodFieldService } from './payment-method-field.service';
import { PaymentMethodField } from '@/modules/payment-method-field/domain/payment-method-field';

@Resolver(() => PaymentMethodField)
export class PaymentMethodFieldResolver {
  constructor(
    private readonly paymentMethodFieldService: PaymentMethodFieldService
  ) {}
}

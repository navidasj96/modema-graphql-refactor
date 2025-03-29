import { Resolver } from '@nestjs/graphql';
import { PaymentMethodService } from './payment-method.service';
import { PaymentMethod } from '@/modules/payment-method/domain/payment-method';

@Resolver(() => PaymentMethod)
export class PaymentMethodResolver {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}
}

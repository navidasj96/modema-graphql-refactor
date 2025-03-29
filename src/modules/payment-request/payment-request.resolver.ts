import { Resolver } from '@nestjs/graphql';
import { PaymentRequestService } from './payment-request.service';
import { PaymentRequest } from '@/modules/payment-request/domain/payment-request';

@Resolver(() => PaymentRequest)
export class PaymentRequestResolver {
  constructor(private readonly paymentRequestService: PaymentRequestService) {}
}

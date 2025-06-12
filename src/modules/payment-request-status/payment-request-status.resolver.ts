import { Resolver } from '@nestjs/graphql';
import { PaymentRequestStatusService } from './payment-request-status.service';
import { PaymentRequestStatus } from '@/modules/payment-request-status/domain/payment-request-status';

@Resolver(() => PaymentRequestStatus)
export class PaymentRequestStatusResolver {
  constructor(
    private readonly paymentRequestStatusService: PaymentRequestStatusService
  ) {}
}

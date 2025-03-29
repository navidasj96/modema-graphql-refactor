import { Resolver } from '@nestjs/graphql';
import { InvoicePaymentStatusService } from './invoice-payment-status.service';
import { InvoicePaymentStatus } from '@/modules/invoice-payment-status/domain/invoice-payment-status';

@Resolver(() => InvoicePaymentStatus)
export class InvoicePaymentStatusResolver {
  constructor(
    private readonly invoicePaymentStatusService: InvoicePaymentStatusService,
  ) {}
}

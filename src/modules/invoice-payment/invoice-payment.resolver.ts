import { Resolver } from '@nestjs/graphql';
import { InvoicePaymentService } from './invoice-payment.service';
import { InvoicePayment } from '@/modules/invoice-payment/domain/invoice-payment';

@Resolver(() => InvoicePayment)
export class InvoicePaymentResolver {
  constructor(private readonly invoicePaymentService: InvoicePaymentService) {}
}

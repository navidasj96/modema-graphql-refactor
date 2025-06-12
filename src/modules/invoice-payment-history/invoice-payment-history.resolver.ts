import { Resolver } from '@nestjs/graphql';
import { InvoicePaymentHistoryService } from './invoice-payment-history.service';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/domain/invoice-payment-history';

@Resolver(() => InvoicePaymentHistory)
export class InvoicePaymentHistoryResolver {
  constructor(
    private readonly invoicePaymentHistoryService: InvoicePaymentHistoryService
  ) {}
}

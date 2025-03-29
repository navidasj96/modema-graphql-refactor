import { Resolver } from '@nestjs/graphql';
import { InvoiceInvoiceStatusService } from './invoice-invoice-status.service';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status';

@Resolver(() => InvoiceInvoiceStatus)
export class InvoiceInvoiceStatusResolver {
  constructor(
    private readonly invoiceInvoiceStatusService: InvoiceInvoiceStatusService,
  ) {}
}

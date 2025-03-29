import { Resolver } from '@nestjs/graphql';
import { InvoiceStatusService } from './invoice-status.service';
import { InvoiceStatus } from '@/modules/invoice-status/domain/invoice-status';

@Resolver(() => InvoiceStatus)
export class InvoiceStatusResolver {
  constructor(private readonly invoiceStatusService: InvoiceStatusService) {}
}

import { Resolver } from '@nestjs/graphql';
import { InvoiceHistoryService } from './invoice-history.service';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';

@Resolver(() => InvoiceHistory)
export class InvoiceHistoryResolver {
  constructor(private readonly invoiceHistoryService: InvoiceHistoryService) {}
}

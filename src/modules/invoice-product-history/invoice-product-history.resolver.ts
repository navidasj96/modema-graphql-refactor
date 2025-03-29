import { Resolver } from '@nestjs/graphql';
import { InvoiceProductHistoryService } from './invoice-product-history.service';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';

@Resolver(() => InvoiceProductHistory)
export class InvoiceProductHistoryResolver {
  constructor(
    private readonly invoiceProductHistoryService: InvoiceProductHistoryService,
  ) {}
}

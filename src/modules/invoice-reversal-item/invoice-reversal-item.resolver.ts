import { Resolver } from '@nestjs/graphql';
import { InvoiceReversalItemService } from './invoice-reversal-item.service';
import { InvoiceReversalItem } from '@/modules/invoice-reversal-item/domain/invoice-reversal-item';

@Resolver(() => InvoiceReversalItem)
export class InvoiceReversalItemResolver {
  constructor(
    private readonly invoiceReversalItemService: InvoiceReversalItemService
  ) {}
}

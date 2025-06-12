import { Resolver } from '@nestjs/graphql';
import { InvoiceReversalService } from './invoice-reversal.service';
import { InvoiceReversal } from '@/modules/invoice-reversal/domain/invoice-reversal';

@Resolver(() => InvoiceReversal)
export class InvoiceReversalResolver {
  constructor(
    private readonly invoiceReversalService: InvoiceReversalService
  ) {}
}

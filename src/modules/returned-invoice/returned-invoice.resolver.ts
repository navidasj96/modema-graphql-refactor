import { Resolver } from '@nestjs/graphql';
import { ReturnedInvoiceService } from './returned-invoice.service';
import { ReturnedInvoice } from '@/modules/returned-invoice/domain/returned-invoice';

@Resolver(() => ReturnedInvoice)
export class ReturnedInvoiceResolver {
  constructor(
    private readonly returnedInvoiceService: ReturnedInvoiceService
  ) {}
}
